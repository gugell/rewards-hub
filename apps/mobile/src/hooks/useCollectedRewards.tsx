import {useCallback, useEffect, useState} from 'react';
import { Reward } from '@core';
import useReward from './useReward';

const API_URL = 'https://staging.helloagain.at/api/v1/clients/5189/bounties';

const useCollectedFetchRewards = () => {
  const [collectedRewards, setCollectedRewards] = useState<Reward[]>([]);
  const {isRewarded} = useReward();

  const fetchRewards = useCallback(async () => {
    try {
      const rewardsResponse = await fetch(API_URL);
      const rewardsJson = (await rewardsResponse.json()) as Reward[];
      const filterCollectedRewards = rewardsJson.filter(reward =>
        isRewarded(reward.id),
      );

      setCollectedRewards(filterCollectedRewards);
    } catch (error) {
      console.log('🚀 ~ useEffect ~ error:', error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchRewards();
  }, [fetchRewards]);

  return {fetchRewards, collectedRewards};
};

export default useCollectedFetchRewards;
