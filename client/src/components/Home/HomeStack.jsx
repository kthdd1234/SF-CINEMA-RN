import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screen/Main/Main';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => {
  return (
    <Navigator initialRouteName='Main'>
      <Screen name='Main' component={Main} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default HomeStack;
