import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { Down } from '../../Movie/icon';
import styled from 'styled-components/native';
import List from './List';
import Viewmore from './Viewmore';

const MovieList = ({ item }) => {
  const [viewmore, setViewmore] = useState(false);
  const { listTitle, icon, movieList } = item;

  return (
    <StyledMovieList>
      {movieList.length ? (
        <ListContainer>
          <ListTitle>
            {icon} {listTitle}
          </ListTitle>
          <List movieList={viewmore ? movieList : movieList.slice(0, 4)} />
          {viewmore ? null : (
            <Viewmore
              icon={Down}
              title='더보기'
              titleStyle={style.title}
              buttonStyle={style.btn}
              onPress={() => setViewmore(true)}
            />
          )}
        </ListContainer>
      ) : (
        <Loding size={40} color='red' />
      )}
    </StyledMovieList>
  );
};

const StyledMovieList = styled.View`
  padding-top: 15px;
  padding-bottom: 30px;
  padding-left: 10px;
`;

const ListContainer = styled.View``;

const ListTitle = styled.Text`
  margin-bottom: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const Viewmore = styled(Button)``;

const Loding = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const style = StyleSheet.create({
  title: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  btn: {
    backgroundColor: 'rgb(20, 21, 23)',
  },
});

export default MovieList;
