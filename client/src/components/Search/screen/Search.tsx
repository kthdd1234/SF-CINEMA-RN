import React from 'react';
import { BellsIcon, Search1Icon } from './icon';
import Loding from './component/Loding';
import Keywords from '../../../containers/Search/Keywords';
import styled from 'styled-components/native';

interface ISearch {
  searching: boolean;
  searchResult: string | Array<any>;
}

const Search = ({ searching, searchResult }: ISearch) => {
  const { length } = searchResult;

  return (
    <StyledSearch>
      {searchResult !== 'Not Found' ? (
        <>
          {searching ? (
            <Title>
              <Search1Icon size={17} /> 검색 결과 {length} 건
            </Title>
          ) : (
            <Title>
              <BellsIcon size={17} /> 추천 검색 키워드
            </Title>
          )}
          <Keywords />
        </>
      ) : (
        <Loding />
      )}
    </StyledSearch>
  );
};

const { View, Text }: any = styled;

const StyledSearch = View`
  flex: 1;
  padding: 10px 25px 25px 25px;
  background-color: rgb(20, 21, 23);
`;

const Title = Text`
  font-size: 17px;
  font-weight: bold;
  color: white;
`;

export default Search;
