import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';
import styled from 'styled-components';

interface IKeywords {
  searchResult: Array<any>
}

const Keywords = ({ searchResult }: IKeywords) => {
  return (
    <StyledKeywords
      data={searchResult}
      renderItem={({ item }: any) => <Item item={item} />}
      keyExtractor={({ titleEng }: any) => titleEng}
    />
  );
};

const StyledKeywords = styled(FlatList)`
  margin-bottom: 25px;
`;

export default Keywords;
