import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type RewardId = string;

export interface RewardsState {
  rewardsList: RewardId[];
}

const initialState: RewardsState = {
  rewardsList: [],
};

const isExistingReward = (products: RewardId[], productId: RewardId) => {
  return products.some((product) => product === productId);
};

export const rewardsSlice = createSlice({
  name: 'collectedRewards',
  initialState,
  reducers: {
    COLLECT_REWARD: (state, action: PayloadAction<RewardId>) => {
      const { payload } = action;
      const rewardExists = isExistingReward(state.rewardsList, payload);

      if (rewardExists) {
        return;
      }

      state.rewardsList.push(payload);
    },
  },
});

export const { COLLECT_REWARD } = rewardsSlice.actions;

export default rewardsSlice.reducer;
