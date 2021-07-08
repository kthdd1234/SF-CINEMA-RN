import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { SearchIcon } from '../icon';
import { search } from '../request';
import { recommendKeywordList } from '../data';
import styled from 'styled-components/native';

const Header = ({ setSearch, searchResult }) => {
  useEffect(() => {
    searchResult(recommendKeywordList);
  }, []);

  const onChangeText = async (value) => {
    if (!value) {
      setSearch(false);
      searchResult(recommendKeywordList);
    } else {
      const data = await search(value);
      setSearch(true);
      searchResult(data);
    }
  };

  const { leftIcon, container, inputContainer, input } = styles;

  return (
    <SearchBar
      autoFocus={true}
      selectionColor='red'
      placeholder='제목, 감독, 배우로 검색'
      leftIcon={SearchIcon}
      leftIconContainerStyle={leftIcon}
      containerStyle={container}
      inputContainerStyle={inputContainer}
      inputStyle={input}
      onChangeText={onChangeText}
    />
  );
};

const SearchBar = styled(Input)``;

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

export default Header;
