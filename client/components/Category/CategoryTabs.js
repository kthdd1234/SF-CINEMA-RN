import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Characteristic from './Characteristic';
import Series from './Series';

const Tab = createMaterialTopTabNavigator();

const CategoryTabs = () => {
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

const styles = StyleSheet.create({
  tabsContainer: {
    backgroundColor: 'black',
    borderColor: 'black',
  },
  underline: {
    backgroundColor: 'red',
  },
  tab: {
    backgroundColor: 'black',
  },
  activeTab: {
    backgroundColor: 'black',
  },
});

export default CategoryTabs;
