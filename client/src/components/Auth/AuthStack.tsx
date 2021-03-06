import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Login from '../../containers/Auth/Login';
import Logo from '../Home/screen/Main/component/Logo';

const { Navigator, Screen, } = createStackNavigator();

const options: StackNavigationOptions = {
  headerTitle: (props: any) => <Logo {...props} />,
  headerStyle: { backgroundColor: 'black' },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' },
  headerTitleAlign: 'center',
};

const AuthStack = () => {
  return (
    <Navigator initialRouteName='Login'>
      <Screen name='Login' component={Login} options={options} />
    </Navigator>
  );
};

export default AuthStack;
