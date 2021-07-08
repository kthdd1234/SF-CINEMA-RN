import React from 'react';
import { FlatList } from 'react-native';
import { PlusCircleIcon } from './icon';
import List from '../../Home/screen/Main/component/List';
import Empty from './component/Empty';
import styled from 'styled-components/native';

const Save = ({ profile }) => {
  const { savedMovie } = profile;

  return (
    <StyledSave>
      {savedMovie.length ? (
        <FlatList ListEmptyComponent={<List movieList={savedMovie} />} />
      ) : (
        <Empty
          icon={<PlusCircleIcon size={80} />}
          value='아직 저장한 작품이 없어요.'
        />
      )}
    </StyledSave>
  );
};

const StyledSave = styled.View`
  flex: 1;
  background-color: rgb(20, 21, 23);
  padding-top: 10px;
  padding-left: 10px;
`;

export default Save;
