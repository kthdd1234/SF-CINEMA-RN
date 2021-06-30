import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Container from './screen/Container';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName='Container'>
      <Stack.Screen
        name='Container'
        component={Container}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Home;
