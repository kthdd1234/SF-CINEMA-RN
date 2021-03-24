import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import LogoTitle from '../../LogoTitle';

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen
        name='Main'
        component={Main}
        options={{
          // headerTitle: (props) => <LogoTitle {...props} />,
          // headerStyle: {
          //   backgroundColor: 'black',
          // },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;
