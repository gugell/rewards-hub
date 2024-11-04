import { useCallback, useEffect, useState } from 'react';
import { RewardResponseMeta, RewardsResponse, Reward, useConfig } from '@core';
import Config from 'react-native-config';

const useFetchRewards = () => {
  const [rewards, setAllRewards] = useState<RewardsResponse['results']>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [meta, setMeta] = useState<RewardResponseMeta | null>(null);
  const [isEnd, setIsEnd] = useState(false);
  const filteredRewards = rewards.filter((reward: Reward) => reward.image);
  const config = useConfig();

  const initialApiUrl = config.apiUrl + '?limit=10&page=1';

  const fetchRewards = async (shouldFetchNextData = true) => {
    try {
      if (isEnd || isLoading) {
        return;
      }

      setIsLoading(true);
      setIsError(false);
      const rewardsResponse = await fetch(
        shouldFetchNextData ? meta?.next ?? initialApiUrl : initialApiUrl
      );
      const rewardsJson = (await rewardsResponse.json()) as RewardsResponse;

      const rewardsMeta = {
        count: rewardsJson.count,
        next: rewardsJson.next,
        previous: rewardsJson.previous,
      } satisfies RewardResponseMeta;

      setAllRewards(
        shouldFetchNextData
          ? (prev) => [...prev, ...rewardsJson.results]
          : rewardsJson.results
      );
      setMeta(rewardsMeta);

      if (!rewardsJson.next) {
        setIsEnd(true);
      }
    } catch (error) {
      //TODO: handle error if needed
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFirstRewards = useCallback(() => {
    fetchRewards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchFirstRewards();
  }, [fetchFirstRewards, config]);

  return { fetchRewards, rewards: filteredRewards, isLoading, isError };
};

export default useFetchRewards;
