import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home/Home';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => {
  return (
    <Navigator initialRouteName='Home'>
      <Screen name='Home' component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default HomeStack;
