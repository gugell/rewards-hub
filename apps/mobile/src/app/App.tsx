import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ContextWrapper } from '../components/ContextWrapper';
import AvailableRewardsScreen from '../Screens/AvailableRewardsScreen';
import CollectedRewardsScreen from '../Screens/CollectedRewardsScreen';

const Stack = createNativeStackNavigator();

export type AppNavigationStackScreenProps =
  StackScreenProps<AppNavigationStackParamList>;

export type AppNavigationStackParamList = {
  AvailableRewardsScreen: undefined;
  CollectedRewardsScreen: undefined;
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const { t } = useTranslation();

  return (
    <ContextWrapper>
      <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Stack.Navigator initialRouteName="AvailableRewardsScreen">
          <Stack.Screen
            name="AvailableRewardsScreen"
            options={{ title: t('home') }}
            component={AvailableRewardsScreen}
          />
          <Stack.Screen
            name="CollectedRewardsScreen"
            options={{ title: t('collectedItems') }}
            component={CollectedRewardsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextWrapper>
  );
};

export default App;
