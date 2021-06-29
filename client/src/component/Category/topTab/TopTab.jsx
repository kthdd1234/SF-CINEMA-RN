import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Characteristic from '../screen/Characteristic';
import Series from '../screen/Series';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'whitesmoke',
        pressColor: 'white',
        indicatorStyle: {
          backgroundColor: 'red',
        },
        style: { backgroundColor: 'black' },
      }}
    >
      <Tab.Screen
        name='Characteristic'
        component={Characteristic}
        options={{
          tabBarLabel: '특징',
        }}
      />
      <Tab.Screen
        name='Series'
        component={Series}
        options={{
          tabBarLabel: '시리즈',
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTab;
