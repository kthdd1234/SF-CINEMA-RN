import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryTab from './screen/CategoryTab';

const { Navigator, Screen } = createStackNavigator();

const options = {
  title: '카테고리',
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const CategoryStack = () => {
  return (
    <Navigator initialRouteName='TopTab'>
      <Screen name='TopTab' component={CategoryTab} options={options} />
    </Navigator>
  );
};

export default CategoryStack;
