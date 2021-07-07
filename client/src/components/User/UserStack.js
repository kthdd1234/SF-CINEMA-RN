import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { SettingIcon } from './icon';
import User from './screen/User';

const { Navigator, Screen } = createStackNavigator();

const UserStack = () => {
  const { headerStyle, headerTitleStyle, buttonStyle } = styles;
  const options = {
    title: '마이 페이지',
    headerRight: () => (
      <Button icon={<SettingIcon size={25} />} buttonStyle={buttonStyle} />
    ),
    headerStyle: headerStyle,
    headerTintColor: '#fff',
    headerTitleStyle: headerTitleStyle,
  };

  return (
    <Navigator initialRouteName='User'>
      <Screen name='User' component={User} options={options} />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  buttonStyle: {
    marginRight: 10,
    backgroundColor: 'transparent',
  },
});
export default UserStack;
