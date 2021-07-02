import React from 'react';
import styled from 'styled-components/native';
import ListTitle from './ListTitle';
import List from './List';
import Viewmore from './Viewmore';

const ListContainer = ({
  listTitle,
  movieList,
  icon,
  viewmore,
  setViewmore,
}) => {
  return (
    <StyledListContainer>
      <ListTitle listTitle={listTitle} icon={icon} />
      <List movieList={viewmore ? movieList : movieList.slice(0, 4)} />
      {viewmore ? null : <Viewmore setViewmore={setViewmore} />}
    </StyledListContainer>
  );
};

const StyledListContainer = styled.View``;

export default ListContainer;
