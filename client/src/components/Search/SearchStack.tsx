import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../../containers/Search/Search';
import Header from '../../containers/Search/Header';

const { Navigator, Screen } = createStackNavigator();

const options = {
  headerTitle: (props: any) => <Header {...props} />,
  headerStyle: { backgroundColor: 'black' },
};

const SearchStack = () => {
  return (
    <Navigator initialRouteName='Search'>
      <Screen name='Search' component={Search} options={options} />
    </Navigator>
  );
};

export default SearchStack;
