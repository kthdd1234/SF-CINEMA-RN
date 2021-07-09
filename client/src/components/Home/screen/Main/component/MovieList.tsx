import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { Down } from '../../Movie/icon';
import styled from 'styled-components/native';
import List from './List';

const MovieList = ({ item }) => {
  const [viewmore, setViewmore] = useState(false);
  const { listTitle, icon, movieList } = item;
  const { viewmoreTitleStyle, viewmoreButtonStyle } = style;

  return (
    <StyledMovieList>
      {movieList.length ? (
        <ListContainer>
          <ListTitle>
            <Title>{icon} {listTitle}</Title>
          </ListTitle>
          <List movieList={viewmore ? movieList : movieList.slice(0, 4)} />
          {viewmore ? null : (
            <Viewmore
              icon={Down}
              title='더보기'
              titleStyle={viewmoreTitleStyle}
              buttonStyle={viewmoreButtonStyle}
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

const { View, Text }: any = styled;

const StyledMovieList = View`
  padding-top: 15px;
  padding-bottom: 30px;
  padding-left: 10px;
`;

const ListContainer = View``;

const ListTitle = Text`
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
`;

const Title = Text`
  font-size: 18px;
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
  viewmoreTitleStyle: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  viewmoreButtonStyle: {
    backgroundColor: 'rgb(20, 21, 23)',
  },
});

export default MovieList;
