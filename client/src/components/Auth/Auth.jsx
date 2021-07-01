import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../containers/Login';
import Logo from '../Home/component/Logo';

const Stack = createStackNavigator();

const options = {
  headerTitle: (props) => <Logo {...props} />,
  headerStyle: { backgroundColor: 'black' },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' },
  headerTitleAlign: 'center',
};

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} options={options} />
    </Stack.Navigator>
  );
};

export default Auth;
