import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchSpace from '../../containers/SearchSpace';
import SearchHeader from '../../containers/SearchHeader';
import { searchKeywordList } from '../Search/searchKeywordList';

const { Navigator, Screen } = createStackNavigator();

const Search = ({ sendSearchResultToReduxStore }) => {
  useEffect(() => {
    sendSearchResultToReduxStore(searchKeywordList);
  }, []);

  return (
    <Navigator initialRouteName='SearchSpace'>
      <Screen
        name='SearchSpace'
        component={SearchSpace}
        options={() => ({
          headerTitle: (props) => <SearchHeader {...props} />,
          headerStyle: { backgroundColor: 'black' },
        })}
      />
    </Navigator>
  );
};

export default Search;
