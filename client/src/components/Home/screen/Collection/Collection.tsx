import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import List from '../Main/component/List';

interface ICollection {
  route: IParmas;
}

interface IParmas {
  params: object;
}

const Collection = ({ route }: ICollection) => {
  const { movieList }: any = route.params;

  return (
    <StyledCollection>
      <FlatList 
        data={null} 
        renderItem={null} 
        ListEmptyComponent={<List movieList={movieList} />} 
      />
    </StyledCollection>
  );
};

const { View } :any = styled;

const StyledCollection = View`
  flex: 1;
  padding-top: 20px;
  padding-left: 10px;
  background-color: rgb(20, 21, 23);
`;

export default Collection;
