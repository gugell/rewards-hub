/* eslint-disable jsx-a11y/accessible-emoji */
import { NavigationContainer } from '@react-navigation/native';
import { ContextWrapper } from '../components/ContextWrapper';
import { PaperProvider } from 'react-native-paper';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CollectedRewardsScreen from '../screens/CollectedRewardsScreen';
import AvailableRewardsScreen from '../screens/AvailableRewardsScreen';
import { StackScreenProps } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

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

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Stack.Navigator initialRouteName="AvailableRewardsScreen">
            <Stack.Screen
              name="AvailableRewardsScreen"
              component={AvailableRewardsScreen}
            />
            <Stack.Screen
              name="CollectedRewardsScreen"
              component={CollectedRewardsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;