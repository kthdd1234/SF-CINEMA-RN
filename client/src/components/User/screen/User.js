import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Save from '../../../containers/User/Save';
import Like from '../../../containers/User/Like';
import styled from 'styled-components/native';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const User = () => {
  const { tabBarStyle, indicatorStyle } = styles;
  const tabBarOptions = {
    style: tabBarStyle,
    indicatorStyle: indicatorStyle,
    activeTintColor: 'whitesmoke',
    pressColor: 'white',
  };
  const screens = [
    {
      name: 'Save',
      component: Save,
      options: {
        tabBarLabel: '저장하기',
      },
    },
    {
      name: 'Like',
      component: Like,
      options: {
        tabBarLabel: '재밌어요',
      },
    },
  ];

  return (
    <StyledUser>
      <Navigator tabBarOptions={tabBarOptions}>
        {screens.map(({ name, component, options }, screenIdx) => (
          <Screen
            key={screenIdx}
            name={name}
            component={component}
            options={options}
          />
        ))}
      </Navigator>
    </StyledUser>
  );
};

const StyledUser = styled.View`
  flex: 1;
  background-color: rgb(20, 21, 23);
`;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'black',
  },
  indicatorStyle: {
    backgroundColor: 'red',
  },
});

export default User;
