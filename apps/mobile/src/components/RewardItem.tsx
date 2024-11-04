import React, { FC } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import useReward from '../hooks/useReward';
import { COLLECT_REWARD } from '../redux/rewards.slice';
import { useAppDispatch } from '../redux/store';
import { Reward } from '@core';
import { stripHtmlTags } from '@common';
import RewardItemImage from './RewardItemImage';

type RewardItemProps = {
  reward: Reward;
};

const RewardItem: FC<RewardItemProps> = ({ reward }) => {
  const dispatch = useAppDispatch();
  const { isRewarded } = useReward();
  const onCollectPress = () => {
    Alert.alert(
      reward.bounty_redeem_alert_header,
      reward.bounty_redeem_alert_text,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => dispatch(COLLECT_REWARD(reward.id)),
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <Card
      style={{ ...style.card, ...(isRewarded(reward.id) && style.cardRewarded) }}>
      <Card.Title
        title={reward.name}
        titleNumberOfLines={0}
        subtitleNumberOfLines={0}
        titleStyle={style.cardTitleText}
        subtitle={stripHtmlTags(reward.redeem_description)}
        leftStyle={style.imageWrapper}
        left={props => <RewardItemImage size={props.size} uri={reward.image} />}
        style={style.cardTitle}
      />
      <Card.Content style={style.cardContent}>
        {!!reward.needed_points && (
          <Text>Needed points: {reward.needed_points}</Text>
        )}
      </Card.Content>
      <Card.Actions>
        {!isRewarded(reward.id) && (
          <Button onPress={onCollectPress}>Collect</Button>
        )}
      </Card.Actions>
    </Card>
  );
};

export const style = StyleSheet.create({
  cardTitle: {
    alignItems: 'flex-start',
    marginTop: 12,
  },
  card: {
    marginVertical: 8,
  },
  cardRewarded: {
    opacity: 0.5,
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardTitleText: {
    fontWeight: '700',
    color: '#1A1A1D',
    marginBottom: 8,
  },
  cardContent: {
    marginTop: 12,
  },
  imageWrapper: {
    width: 100,
    height: 100,
    marginTop: 4,
  },
});

export default RewardItem;
