import React, { useState } from 'react';
import styled from 'styled-components/native';
import ListContainer from './ListContainer';
import Loding from './Loding';

const MovieList = ({ item }) => {
  const [viewmore, setViewmore] = useState(false);
  const { listTitle, icon, movieList } = item;

  return (
    <StyledMovieList>
      {movieList.length ? (
        <ListContainer
          listTitle={listTitle}
          movieList={movieList}
          icon={icon}
          viewmore={viewmore}
          setViewmore={setViewmore}
        />
      ) : (
        <Loding />
      )}
    </StyledMovieList>
  );
};

const StyledMovieList = styled.View`
  padding-top: 15px;
  padding-bottom: 30px;
  padding-left: 10px;
`;

export default MovieList;
