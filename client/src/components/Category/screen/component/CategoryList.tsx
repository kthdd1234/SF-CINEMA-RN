import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';
import styled from 'styled-components/native'

const CategoryList = ({ data }) => {
  return (
    <StyledCategoryList>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.key}
      />
    </StyledCategoryList>
  );
};

const { View }: any = styled;

const StyledCategoryList = View`
  padding-left: 2px;
  padding-right: 2px;
  background-color: rgb(20,21,23);
`

export default CategoryList;
