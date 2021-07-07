import React from 'react';
import { FlatList } from 'react-native';
import { Like2Icon } from '../icon';
import List from '../../Home/screen/Main/component/List';
import Empty from '../component/Empty';
import styled from 'styled-components/native';

const Like = ({ profile }) => {
  const { likedMovie } = profile;

  return (
    <StyledLike>
      {likedMovie.length ? (
        <FlatList ListEmptyComponent={<List movieList={likedMovie} />} />
      ) : (
        <Empty
          icon={<Like2Icon size={80} />}
          value='아직 재밌어요를 누른 작품이 없어요.'
        />
      )}
    </StyledLike>
  );
};

const StyledLike = styled.View`
  flex: 1;
  background-color: rgb(20, 21, 23);
  padding-top: 10px;
  padding-left: 10px;
`;

export default Like;
