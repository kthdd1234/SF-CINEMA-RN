import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Home';

const Stack = createStackNavigator();

const HomeTab = ({}) => {
  return (
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen
        name='Main'
        component={Main}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeTab;
