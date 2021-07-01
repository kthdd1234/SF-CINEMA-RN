import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Save from '../../containers/Save';
import Like from '../../containers/Like';

const Tab = createMaterialTopTabNavigator();

const MyPage = () => {
  return (
    <View style={styles.container}>
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
          name='Save'
          component={Save}
          options={{
            tabBarLabel: '저장하기',
          }}
        />
        <Tab.Screen
          name='Like'
          component={Like}
          options={{
            tabBarLabel: '재밌어요',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20, 21, 23)',
  },
});

export default MyPage;
