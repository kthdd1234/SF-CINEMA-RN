import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import MyPage from './MyPage';

const { Navigator, Screen } = createStackNavigator();

const User = ({ profile }) => {
  return (
    <Navigator initialRouteName='MyPage'>
      <Screen
        name='MyPage'
        component={MyPage}
        options={{
          title: '마이 페이지',
          headerRight: () => (
            <Button
              title={`${profile.loginID} 님`}
              titleStyle={{
                color: 'darkgray',
                fontSize: 15,
              }}
              buttonStyle={{
                backgroundColor: 'black',
                marginRight: 10,
                paddingTop: 15,
                paddingBottom: 15,
              }}
            />
          ),
          headerStyle: styles.headerContainer,
          headerTintColor: '#fff',
          headerTitleStyle: styles.headerText,
        }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'black',
  },
  headerText: {
    fontWeight: 'bold',
  },
  headerRightText: {
    color: 'darkgray',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default User;
