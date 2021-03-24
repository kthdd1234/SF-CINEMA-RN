import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './components/Home';
import Category from './components/Category';
import Auth from './components/Auth';
import Search from './container/Search';
import User from './container/User';

const Tab = createBottomTabNavigator();

const BottomTabs = ({ profile }) => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            홈: 'home',
            카테고리: 'bars',
            검색: 'search1',
            '로그인/가입': 'adduser',
            마이페이지: 'user',
          };

          return (
            <AntDesign name={icons[route.name]} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'black',
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name='홈' component={Home} />
      <Tab.Screen name='카테고리' component={Category} />
      <Tab.Screen name='검색' component={Search} />
      {Object.keys(profile).length === 0 ? (
        <Tab.Screen name='로그인/가입' component={Auth} />
      ) : (
        <Tab.Screen name='마이페이지' component={User} />
      )}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomTabs;
