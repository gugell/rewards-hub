import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CollectedRewardItem from '../components/CollectedRewardItem';
import useCollectedFetchRewards from '../hooks/useCollectedRewards';
type CollectedRewardsScreenProps = {};

const CollectedRewardsScreen: FC<CollectedRewardsScreenProps> = () => {
  const {collectedRewards} = useCollectedFetchRewards();

  return (
    <SafeAreaView style={style.wrapper}>
      <ScrollView style={style.body}>
        {collectedRewards.map(reward => (
          <CollectedRewardItem key={reward.id} reward={reward} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  body: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  loading: {
    padding: 8,
    fontSize: 15,
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error__text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
  },
  button: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua',
  },
});

export default CollectedRewardsScreen;
