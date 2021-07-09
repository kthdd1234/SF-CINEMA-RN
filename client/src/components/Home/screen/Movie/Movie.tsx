import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Divider, Button } from 'react-native-elements';
import { Down } from './icon';
import {
  BackDrop,
  SubTitle,
  ActionBtns,
  Trailer,
  Spec,
  SimilarMovies,
} from './component';
import styled from 'styled-components/native';

const Movie = ({ route, isLogin, profile, updateProfile }) => {
  const [viewmore, setViewmore] = useState(true);
  const [numberOfLines, setNumberOfLines] = useState(3);
  const [playing, setPlaying] = useState(false);
  const { movie } = route.params;
  const {
    id,
    title,
    genre,
    plot,
    videoId,
    backDrop,
    userRating,
    numberOfLikes,
    ratingGrade,
    runtime,
    director,
    actors,
    releaseDate,
    nation,
  } = movie;

  const { viewmoreTitle, viewmoreBtn } = styles;

  useEffect(() => {
    plot.length < 100 ? setViewmore(false) : null;
  }, []);

  const onPressViewmore = () => {
    setNumberOfLines(20);
    setViewmore(false);
  };

  return (
    <StyledMovie
      ListHeaderComponent={
        playing ? (
          <Trailer videoId={videoId} playing={playing} />
        ) : (
          <BackDrop
            backDrop={backDrop}
            userRating={userRating}
            numberOfLikes={numberOfLikes}
          />
        )
      }
      ListEmptyComponent={
        <MovieInfo>
          <Title>{title}</Title>
          <SubTitle ratingGrade={ratingGrade} runtime={runtime} />
          <ActionBtns
            isLogin={isLogin}
            profile={profile}
            movieId={id}
            setPlaying={setPlaying}
            updateProfile={updateProfile}
          />

          <DividingLine />

          <Plot numberOfLines={numberOfLines} ellipsizeMode='tail'>
            {plot}
          </Plot>
          {viewmore ? (
            <Viewmore
              icon={Down}
              title='더보기'
              titleStyle={viewmoreTitle}
              buttonStyle={viewmoreBtn}
              onPress={onPressViewmore}
            />
          ) : null}
          <Spec
            director={director}
            actors={actors}
            genre={genre}
            releaseDate={releaseDate}
            nation={nation}
          />

          <DividingLine />
        </MovieInfo>
      }
      ListFooterComponent={<SimilarMovies genre={genre} />}
    />
  );
};

const { View, Text }: any = styled;

const StyledMovie = styled(FlatList)`
  flex: 1;
  background-color: rgb(20, 21, 23);
`;

const MovieInfo = View`
  margin: 10px;
`;

const Title = Text`
  font-size: 21px;
  font-weight: bold;
  color: whitesmoke;
`;

const Plot = Text`
  margin-top: 10px;
  color: darkgray;
  font-size: 15px;
  line-height: 23px;
`;

const Viewmore = styled(Button)``;

const DividingLine = styled(Divider)`
  height: 1px;
  background-color: srgb(48, 47, 47);
`;

const styles = StyleSheet.create({
  viewmoreTitle: {
    marginLeft: 3,
    fontSize: 14,
    color: 'gray',
  },
  viewmoreBtn: {
    backgroundColor: 'transparent',
  },
});

export default Movie;
