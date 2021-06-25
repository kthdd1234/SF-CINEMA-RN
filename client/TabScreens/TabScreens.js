import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './Home/HomeTab';
import Category from './Category';
import Auth from './Auth/Auth';
import Search from '../container/Search';
import User from '../container/User';

const Tab = createBottomTabNavigator();

const icons = {
  홈: 'home',
  카테고리: 'bars',
  검색: 'search1',
  '로그인/가입': 'adduser',
  마이페이지: 'user',
}

const TabScreens = ({ profile }) => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
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

export default TabScreens;