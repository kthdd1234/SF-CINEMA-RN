import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { SearchIcon } from '../icon';
import { search } from '../request';
import { recommendKeywordList } from '../data';
import styled from 'styled-components/native';

interface IHeader {
  setSearch: Function;
  searchResult: Function
}

const Header = ({ setSearch, searchResult }: IHeader) => {
  useEffect(() => {
    searchResult(recommendKeywordList);
  }, []);

  const onChangeText = async (value: string) => {
    if (!value) {
      setSearch(false);
      searchResult(recommendKeywordList);
    } else {
      const data = await search(value);
      setSearch(true);
      searchResult(data);
    }
  };

  const { leftIconContainerStyle, containerStyle, inputContainerStyle, inputStyle } = styles;

  return (
    <SearchBar
      autoFocus={true}
      selectionColor='red'
      placeholder='제목, 감독, 배우로 검색'
      leftIcon={SearchIcon}
      containerStyle={containerStyle}
      leftIconContainerStyle={leftIconContainerStyle}
      inputContainerStyle={inputContainerStyle}
      inputStyle={inputStyle}
      onChangeText={onChangeText}
    />
  );
};

const SearchBar = styled(Input)``;

const styles = StyleSheet.create({
  containerStyle: {
    top: 5,
  },
  leftIconContainerStyle: {
    color: 'white',
  },
  inputContainerStyle: {
    borderBottomColor: 'red',
    marginTop: 5,
    borderBottomWidth: 2,
  },
  inputStyle: {
    color: 'white',
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 17,
  },
});

export default Header;
