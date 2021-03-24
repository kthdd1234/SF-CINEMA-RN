import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { search } from '../../requests';
import { searchKeywordList } from './searchKeywordList';

const SearchIcon = () => {
  return <Icon name='search' type='font-awesome' color='gray' />;
};

const SearchHeader = ({
  sendSearchingToReduxStore,
  sendSearchResultToReduxStore,
}) => {
  const onChangeText = useCallback((text) => {
    const getSearchData = async () => {
      if (text === '') {
        sendSearchingToReduxStore(false);
        sendSearchResultToReduxStore(searchKeywordList);
      } else {
        const searchResult = await search(text);
        sendSearchingToReduxStore(true);
        sendSearchResultToReduxStore(searchResult);
      }
    };
    getSearchData();
  }, []);

  return (
    <Input
      autoFocus={true}
      selectionColor='red'
      placeholder='제목, 감독, 배우로 검색'
      leftIcon={SearchIcon}
      onChangeText={onChangeText}
      leftIconContainerStyle={styles.leftIcon}
      inputContainerStyle={styles.inputContainer}
      containerStyle={styles.container}
      inputStyle={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    top: 5,
  },
  leftIcon: {
    color: 'white',
  },
  inputContainer: {
    borderBottomColor: 'red',
    marginTop: 5,
    borderBottomWidth: 2,
  },
  input: {
    color: 'white',
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 17,
  },
});

export default SearchHeader;
