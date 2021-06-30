import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Characteristic from '../screen/Characteristic';
import Series from '../screen/Series';

const Tab = createMaterialTopTabNavigator();

const tabBarOptions = {
  activeTintColor: 'whitesmoke',
  pressColor: 'white',
  indicatorStyle: {
    backgroundColor: 'red',
  },
  style: { backgroundColor: 'black' },
};

const tabScreens = [
  {
    name: 'Characteristic',
    component: Characteristic,
    options: { tabBarLabel: '특징' },
  },
  {
    name: 'Series',
    component: Series,
    options: {
      tabBarLabel: '시리즈',
    },
  },
];

const TopTab = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      {tabScreens.map(({ name, component, options }, screenIdx) => (
        <Tab.Screen
          key={screenIdx}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TopTab;
