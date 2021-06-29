import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopTab from './topTab/TopTab';

const Stack = createStackNavigator();

const Category = () => {
  return (
    <Stack.Navigator initialRouteName='TopTab'>
      <Stack.Screen
        name='TopTab'
        component={TopTab}
        options={{
          title: '카테고리',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Category;
