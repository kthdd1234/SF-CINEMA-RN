import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeStack from './components/Home/HomeStack';
import CategoryStack from './components/Category/CategoryStack';
import AuthStack from './components/Auth/AuthStack';
import SearchStack from './components/Search/SearchStack';
import UserStack from './containers/User/UserStack';

const { Navigator, Screen } = createBottomTabNavigator();

const icons = {
  홈: 'home',
  카테고리: 'bars',
  검색: 'search1',
  '로그인/가입': 'adduser',
  마이페이지: 'user',
};

const tabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
  style: {
    backgroundColor: 'black',
    borderTopWidth: 0,
  },
};

const defaultScreens = [
  {
    name: '홈',
    component: HomeStack,
  },
  {
    name: '카테고리',
    component: CategoryStack,
  },
  {
    name: '검색',
    component: SearchStack,
  },
];

const BottomTab = ({ isLogin }) => {
  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          return (
            <AntDesign name={icons[route.name]} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={tabBarOptions}
    >
      {defaultScreens.map(({ name, component }, screenIdx) => (
        <Screen key={screenIdx} name={name} component={component} />
      ))}
      {isLogin ? (
        <Screen name='마이페이지' component={UserStack} />
      ) : (
        <Screen name='로그인/가입' component={AuthStack} />
      )}
    </Navigator>
  );
};

export default BottomTab;
