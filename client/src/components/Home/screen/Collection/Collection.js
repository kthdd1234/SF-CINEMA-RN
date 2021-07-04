import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import List from '../Main/component/List';

const Collection = ({ route }) => {
  const { movieList } = route.params;

  return (
    <StyledCollection>
      <FlatList ListEmptyComponent={<List movieList={movieList} />} />
    </StyledCollection>
  );
};

const StyledCollection = styled.View`
  flex: 1;
  padding: 10px;
  background-color: rgb(20, 21, 23);
`;

export default Collection;
