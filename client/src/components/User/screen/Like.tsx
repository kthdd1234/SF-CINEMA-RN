import React from 'react';
import { FlatList } from 'react-native';
import { Like2Icon } from './icon';
import List from '../../Home/screen/Main/component/List';
import Empty from './component/Empty';
import styled from 'styled-components/native';

interface IProfile {
  profile : IProps;
}

interface IProps {
  likedMovie: Array<any>
}

const Like = ({ profile }: IProfile) => {
  const { likedMovie } = profile;

  return (
    <StyledLike>
      {likedMovie.length ? (
        <FlatList data={null} renderItem={null} ListEmptyComponent={<List movieList={likedMovie} />} />
      ) : (
        <Empty
          icon={<Like2Icon size={80} />}
          value='아직 재밌어요를 누른 작품이 없어요.'
        />
      )}
    </StyledLike>
  );
};

const { View }: any = styled;

const StyledLike = View`
  flex: 1;
  background-color: rgb(20, 21, 23);
  padding-top: 10px;
  padding-left: 10px;
`;

export default Like;
