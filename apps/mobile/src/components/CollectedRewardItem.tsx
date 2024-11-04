import React, { FC } from 'react';
import { Card, Text } from 'react-native-paper';
import { Reward } from '@core';
import { stripHtmlTags } from '@common';
import { style } from './RewardItem';

import RewardItemImage from './RewardItemImage';
import { useTranslation } from 'react-i18next';

type CollectedRewardItemProps = {
  reward: Reward;
};

const CollectedRewardItem: FC<CollectedRewardItemProps> = ({ reward }) => {
  const { t } = useTranslation();

  return (
    <Card style={{ ...style.card }}>
      <Card.Title
        title={reward.name}
        titleNumberOfLines={0}
        subtitleNumberOfLines={0}
        titleStyle={style.cardTitleText}
        style={style.cardTitle}
        leftStyle={style.imageWrapper}
        subtitle={stripHtmlTags(reward.redeem_description)}
        left={props => <RewardItemImage size={props.size} uri={reward.image} />}
      />
      <Card.Content style={style.cardContent}>
        {!!reward.needed_points && (
          <Text>{t('pointsRequired', { points: reward.needed_points })} </Text>
        )}
      </Card.Content>
    </Card>
  );
};

export default CollectedRewardItem;
