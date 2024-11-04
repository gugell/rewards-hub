import { Reward, useConfig } from '@core';
import { useCallback, useEffect, useState } from 'react';
import useReward from './useReward';

const useCollectedFetchRewards = () => {
  const [collectedRewards, setCollectedRewards] = useState<Reward[]>([]);
  const { isRewarded } = useReward();

  const config = useConfig();

  const fetchRewards = useCallback(async () => {
    try {
      const rewardsResponse = await fetch(config.apiUrl);
      const rewardsJson = (await rewardsResponse.json()) as Reward[];
      const filterCollectedRewards = rewardsJson.filter((reward) =>
        isRewarded(reward.id)
      );

      setCollectedRewards(filterCollectedRewards);
    } catch (error) {
      //TODO: handle error
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchRewards();
  }, [fetchRewards, config]);

  return { fetchRewards, collectedRewards };
};

export default useCollectedFetchRewards;
