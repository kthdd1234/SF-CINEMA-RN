import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Content from './Content';

const List = ({ movieList }) => {
  return (
    <StyledList
      data={movieList}
      renderItem={({ item }) => <Content movie={item} />}
      keyExtractor={(item) => item.title}
    />
  );
};

const StyledList = styled(FlatList)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export default List;
