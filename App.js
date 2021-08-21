/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import MoviesScreen from './src/screens/MoviesScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import WatchlistScreen from './src/screens/WatchlistScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Movies"
            tabBarOptions={{
              style: {
                height: 72,
              },
              keyboardHidesTabBar: true,
              activeTintColor: 'black',
              labelStyle: {fontSize: 17, fontWeight: 'bold'},
            }}>
            <Tab.Screen
              options={{
                tabBarLabel: 'Movies',
              }}
              component={MoviesScreen}
              name="Movies"
            />
            <Tab.Screen
              options={{
                tabBarLabel: 'Watchlist',
              }}
              component={WatchlistScreen}
              name="Watchlist"
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
