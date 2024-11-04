import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';

export type RewardImageProps = {
  size: number;
  uri: string;
};

const RewardItemImage: FC<RewardImageProps> = ({uri}) => {
  return (
    <Image
      style={{
        ...style.cardImage,
      }}
      source={{uri: uri}}
    />
  );
};

export default RewardItemImage;
export const style = StyleSheet.create({
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
