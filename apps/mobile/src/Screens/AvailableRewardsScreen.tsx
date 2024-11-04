import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppNavigationStackScreenProps } from '../app/App';

import RewardItem from '../components/RewardItem';

import useFetchRewards from '../hooks/useFetchRewards';

type AvailableRewardsScreenProps = {
  title: string;
};

const AvailableRewardsScreen: FC<AvailableRewardsScreenProps> = () => {
  const { rewards, fetchRewards, isError, isLoading } = useFetchRewards();
  const { navigate } =
    useNavigation<AppNavigationStackScreenProps['navigation']>();

  const onGoToCollectedRewardsPress = () => {
    navigate('CollectedRewardsScreen');
  };

  const onRefresh = () => fetchRewards(false);

  return (
    <SafeAreaView style={style.wrapper}>
      <View style={style.body}>
        {!isError ? (
          <FlatList
            data={rewards}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <RewardItem reward={item} />}
            keyExtractor={item => item.id}
            onEndReached={() => fetchRewards()}
            onRefresh={onRefresh}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
            }
            refreshing={isLoading}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              <View>
                <ActivityIndicator
                  animating={isLoading}
                  style={style.loading}
                  size={'large'}
                />
              </View>
            }
          />
        ) : (
          <View style={style.error}>
            <Text style={style.error__text}>Something went wrong</Text>
          </View>
        )}
        <Button mode="contained" onPress={onGoToCollectedRewardsPress}>
          Collected Rewards
        </Button>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  body: {
    flex: 1,
    padding: 16,
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },

  loading: {
    margin: 8,
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
export default AvailableRewardsScreen;
