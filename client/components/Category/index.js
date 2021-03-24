import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryTabs from './CategoryTabs';

const Stack = createStackNavigator();

const Category = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='CategoryTabs'>
      <Stack.Screen
        name='CategoryTabs'
        component={CategoryTabs}
        options={{
          title: '카테고리',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Category;
