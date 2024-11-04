import {useAppSelector} from '../redux/store';

const useReward = () => {
  const rewards = useAppSelector(state => state.rewards.rewardsList);

  const isRewarded = (rewardId: string) => {
    return rewards.includes(rewardId);
  };

  return {isRewarded};
};

export default useReward;
