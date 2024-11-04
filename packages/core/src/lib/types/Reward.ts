export interface Reward {
  activation_description: string;
  amount: unknown;
  availability: number;
  consume_points: boolean;
  cr_points: unknown;
  cr_rank: number;
  description: unknown;
  highscore_contest: boolean;
  id: string;
  image: string;
  is_activateable: unknown;
  is_deactivatable: unknown;
  is_activated: unknown;
  is_active: boolean;
  throttle: RewardThrottle;
  time_range_redeem_count: unknown;
  contest: boolean;
  is_redeemable: unknown;
  limited: boolean;
  name: string;
  needed_points: number;
  needed_visits: number;
  pictures: unknown[];
  point_contest: boolean;
  ranks: number;
  redeem_count: unknown;
  redeem_description: string;
  require_shop_when_redeemed: boolean;
  show_progress_bar: boolean;
  single_use: boolean;
  shipping: boolean;
  redeem_success_alert_text: string;
  app_form: unknown;
  bounty_redeem_alert_header: string;
  bounty_redeem_alert_text: string;
  show_ranking: boolean;
  contest_type: unknown;
  bounty_activate_alert_header: string;
  bounty_activate_alert_text: string;
  can_participate: unknown;
  is_participating: unknown;
  required_status: unknown;
  instant: boolean;
  valid_from: unknown;
  valid_until: unknown;
  manual_claim: boolean;
  shop: unknown;
  category: unknown;
  condition_id: unknown;
  is_expired: boolean;
  point_pool: unknown;
  order: number;
  terms: unknown;
  variations: unknown;
  promo_redeem_types: RewardPromoRedeemType[];
  show_confirmation_dialog: string;
  reward_type: number;
  prizes: unknown;
  type: number;
}

export interface RewardThrottle {
  redeem_limit: number;
  redeem_limit_time_range: string;
}

export interface RewardPromoRedeemType {
  type: string;
}

// export const schema = z.object({
//   activation_description: z.string(),
//   amount: z.null(),
//   availability: z.number(),
//   consume_points: z.boolean(),
//   cr_points: z.null(),
//   cr_rank: z.number(),
//   description: z.null(),
//   highscore_contest: z.boolean(),
//   id: z.string(),
//   image: z.string(),
//   is_activateable: z.null(),
//   is_deactivatable: z.null(),
//   is_activated: z.null(),
//   is_active: z.boolean(),
//   throttle: z.object({
//     redeem_limit: z.number(),
//     redeem_limit_time_range: z.string(),
//   }),
//   time_range_redeem_count: z.null(),
//   contest: z.boolean(),
//   is_redeemable: z.null(),
//   limited: z.boolean(),
//   name: z.string(),
//   needed_points: z.number(),
//   needed_visits: z.number(),
//   pictures: z.array(z.unknown()),
//   point_contest: z.boolean(),
//   ranks: z.number(),
//   redeem_count: z.null(),
//   redeem_description: z.string(),
//   require_shop_when_redeemed: z.boolean(),
//   show_progress_bar: z.boolean(),
//   single_use: z.boolean(),
//   shipping: z.boolean(),
//   redeem_success_alert_text: z.string(),
//   app_form: z.null(),
//   bounty_redeem_alert_header: z.string(),
//   bounty_redeem_alert_text: z.string(),
//   show_ranking: z.boolean(),
//   contest_type: z.null(),
//   bounty_activate_alert_header: z.string(),
//   bounty_activate_alert_text: z.string(),
//   can_participate: z.null(),
//   is_participating: z.null(),
//   required_status: z.null(),
//   instant: z.boolean(),
//   valid_from: z.null(),
//   valid_until: z.null(),
//   manual_claim: z.boolean(),
//   shop: z.null(),
//   category: z.null(),
//   condition_id: z.null(),
//   is_expired: z.boolean(),
//   point_pool: z.null(),
//   order: z.number(),
//   terms: z.null(),
//   variations: z.null(),
//   promo_redeem_types: z.array(z.object({type: z.string()})),
//   show_confirmation_dialog: z.string(),
//   reward_type: z.number(),
//   prizes: z.null(),
//   type: z.number(),
// });
