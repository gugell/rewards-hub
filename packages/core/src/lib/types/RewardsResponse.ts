import {Reward} from './Reward';

export interface RewardsResponse {
  count: number;
  next: string;
  previous: string;
  results: Reward[];
}

export type RewardResponseMeta = Pick<
  RewardsResponse,
  'count' | 'next' | 'previous'
>;
