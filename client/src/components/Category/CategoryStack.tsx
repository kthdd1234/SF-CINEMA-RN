import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import CategoryTab from './screen/CategoryTab';

const { Navigator, Screen } = createStackNavigator();

const options: StackNavigationOptions = {
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
