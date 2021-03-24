import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../container/Login';
import LogoTitle from '../../LogoTitle';

const Stack = createStackNavigator();

const Auth = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: styles.headerContainer,
          headerTintColor: '#fff',
          headerTitleStyle: styles.headerText,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'black',
  },
  headerText: {
    fontWeight: 'bold',
  },
});

export default Auth;
