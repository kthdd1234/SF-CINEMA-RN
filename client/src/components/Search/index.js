import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchSpace from '../../containers/SearchSpace';
import SearchHeader from '../../containers/SearchHeader';
import { searchKeywordList } from '../Search/searchKeywordList';

const Stack = createStackNavigator();

const Search = ({ sendSearchResultToReduxStore }) => {
  useEffect(() => {
    sendSearchResultToReduxStore(searchKeywordList);
  }, []);

  return (
    <Stack.Navigator initialRouteName='SearchSpace'>
      <Stack.Screen
        name='SearchSpace'
        component={SearchSpace}
        options={({ route }) => ({
          headerTitle: (props) => <SearchHeader {...props} />,
          headerStyle: {
            backgroundColor: 'black',
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default Search;
