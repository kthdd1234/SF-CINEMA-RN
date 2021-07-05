import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import { Divider, Button } from 'react-native-elements';
import {
  genres,
  likeCompleted,
  saveCancel,
  saveCompleted,
  likeCancel,
} from '../../../../requests';
import {
  PlusIcon,
  LikeIcon,
  PlayIcon,
  DotsVerticalIcon,
  CheckIcon,
  LikeFillIcon,
  Down,
  Bulb1,
} from './icon';
import styled from 'styled-components/native';
import BackDrop from './component/BackDrop';
import SubTitle from './component/SubTitle';
import List from '../Main/component/List';
import Trailer from './component/Trailer';

const alertMessage = (message) => {
  return Alert.alert(
    null,
    message,
    [
      {
        text: '확인',
        style: 'destructive',
      },
    ],
    { cancelable: true }
  );
};

const ActionButtons = ({
  movieId,
  profile,
  setPlaying,
  updateProfileToReduxStore,
}) => {
  const [saveVisible, setSaveVisible] = useState(false);
  const [likeVisible, setLikeVisible] = useState(false);

  const data = Object.keys(profile).length;

  const alertSaveMessage = '로그인을 하여 해당 작품을 저장해보세요 :)';
  const alertLikeMessage =
    '로그인을 하여 해당 작품에 대한 평가를 내려주세요 :)';

  if (Object.keys(profile).length) {
    useEffect(() => {
      const { savedMovie, likedMovie } = profile;

      if (savedMovie.length) {
        savedMovie.some((movie) => {
          if (movie.id === movieId) {
            setSaveVisible(true);
            return true;
          }
        });
      }

      if (likedMovie.length) {
        likedMovie.some((movie) => {
          if (movie.id === movieId) {
            setLikeVisible(true);
            return true;
          }
        });
      }
    }, []);
  }

  const onPressSaveBtn = async () => {
    if (data === 0) {
      alertMessage(alertSaveMessage);
    } else {
      const userId = profile.id;
      if (!saveVisible) {
        const updateProfile = await saveCompleted(userId, movieId);
        updateProfileToReduxStore(updateProfile);
      } else {
        const updateProfile = await saveCancel(userId, movieId);
        updateProfileToReduxStore(updateProfile);
      }
    }
    setSaveVisible(!saveVisible);
  };

  const onPressLikeBtn = async () => {
    if (data === 0) {
      alertMessage(alertLikeMessage);
    } else {
      const userId = profile.id;
      if (!likeVisible) {
        const updateProfile = await likeCompleted(userId, movieId);
        updateProfileToReduxStore(updateProfile);
      } else {
        const updateProfile = await likeCancel(userId, movieId);
        updateProfileToReduxStore(updateProfile);
      }
    }
    setLikeVisible(!likeVisible);
  };

  return (
    <View style={styles.actionButtonWrap}>
      <Button
        icon={saveVisible ? <CheckIcon /> : <PlusIcon />}
        title='저장하기'
        buttonStyle={styles.actionButtons}
        titleStyle={saveVisible ? styles.actionBtnFill : styles.actionBtnOut}
        onPress={onPressSaveBtn}
      />
      <Button
        icon={likeVisible ? <LikeFillIcon /> : <LikeIcon size={23} />}
        title='재밌어요'
        buttonStyle={styles.actionButtons}
        titleStyle={likeVisible ? styles.actionBtnFill : styles.actionBtnOut}
        onPress={onPressLikeBtn}
      />
      <Button
        icon={<PlayIcon />}
        title='예고편 보기'
        buttonStyle={styles.actionButtons}
        titleStyle={styles.actionButtonTitle}
        onPress={() => setPlaying(true)}
      />
      <Button
        icon={<DotsVerticalIcon />}
        buttonStyle={{
          backgroundColor: 'rgb(20, 21, 23)',
        }}
        containerStyle={{
          flex: 1,
          flexDirection: 'row-reverse',
        }}
      />
    </View>
  );
};

const MoviePlot = ({ numberOfLines, plot }) => {
  return (
    <Text
      style={styles.plot}
      numberOfLines={numberOfLines}
      ellipsizeMode='tail'
    >
      {plot}
    </Text>
  );
};

const Viewmore = ({ viewmore, setNumberOfLines, setViewmore }) => {
  return (
    <View>
      {viewmore ? (
        <Button
          title={' 더보기'}
          titleStyle={styles.viewmoreText}
          buttonStyle={styles.viewmoreButton}
          icon={Down}
          onPress={() => {
            setNumberOfLines(20);
            setViewmore(false);
          }}
        />
      ) : null}
    </View>
  );
};

const Summary = ({ director, actors, genre, releaseDate, nation }) => {
  return (
    <View style={styles.summaryWrap}>
      <Text style={styles.director}>감독: {director}</Text>
      <Text style={styles.actors} numberOfLines={1}>
        출연: {actors}
      </Text>
      <Text style={styles.characteristic}>
        개요: {genre} / {nation} / {String(releaseDate).slice(0, 4)}년
      </Text>
    </View>
  );
};

const SimilarMovies = ({ similarMovies }) => {
  return (
    <View>
      <Text style={styles.similarMoviesTitle}>
        <Bulb1 /> 비슷한 작품들
      </Text>
      <View style={styles.similarMovies}>
        <List movieList={similarMovies} />
      </View>
    </View>
  );
};

const Movie = ({ route, profile, updateProfileToReduxStore }) => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const [viewmore, setViewmore] = useState(true);
  const [numberOfLines, setNumberOfLines] = useState(3);
  const [playing, setPlaying] = useState(false);
  const { movie } = route.params;
  const {
    title,
    genre,
    plot,
    videoId,
    backDrop,
    userRating,
    numberOfLikes,
    ratingGrade,
    runtime,
  } = movie;

  useEffect(() => {
    if (plot.length < 100) {
      setViewmore(false);
    }
    const getSimilarMovies = async () => {
      const similarMovieData = await genres(genre);
      setSimilarMovies(similarMovieData.slice(0, 8));
    };
    getSimilarMovies();
  }, []);

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
        <View style={styles.movieWrap}>
          <Title>{title}</Title>
          <SubTitle ratingGrade={ratingGrade} runtime={runtime} />
          <ActionButtons
            profile={profile}
            setPlaying={setPlaying}
            movieId={movie.id}
            updateProfileToReduxStore={updateProfileToReduxStore}
          />

          <Divider style={styles.divider} />

          <MoviePlot numberOfLines={numberOfLines} plot={movie.plot} />

          <Viewmore
            viewmore={viewmore}
            setNumberOfLines={setNumberOfLines}
            setViewmore={setViewmore}
          />

          <Summary
            director={movie.director}
            actors={movie.actors}
            genre={movie.genre}
            releaseDate={movie.releaseDate}
            nation={movie.nation}
          />

          <Divider style={styles.divider} />
        </View>
      }
      ListFooterComponent={<SimilarMovies similarMovies={similarMovies} />}
    />
  );
};

const StyledMovie = styled(FlatList)`
  flex: 1;
  background-color: rgb(20, 21, 23);
`;

const Title = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: whitesmoke;
`;

const styles = StyleSheet.create({
  movieWrap: {
    marginTop: 13,
    paddingLeft: 13,
    paddingRight: 13,
  },

  userRating: {
    color: 'tomato',
  },
  dot: {
    color: 'gray',
    paddingRight: 5,
    paddingLeft: 5,
  },
  subTitle: {
    flexDirection: 'row',
  },
  ratingGrade: {
    color: 'gray',
  },
  runtime: {
    color: 'gray',
  },

  plot: {
    color: 'darkgray',
    fontSize: 15,
    lineHeight: 23,
  },
  viewmoreText: {
    fontSize: 14,
    color: 'gray',
  },
  viewmoreButton: {
    backgroundColor: 'rgb(20, 21, 23)',
  },
  summaryWrap: {
    marginTop: 10,
    marginBottom: 10,
  },
  director: {
    color: 'gray',
    marginBottom: 3,
  },
  actors: {
    color: 'gray',
    marginBottom: 3,
  },
  characteristic: {
    color: 'gray',
    marginBottom: 3,
  },
  actionButtonWrap: {
    flexDirection: 'row',
    marginTop: 10,
  },
  actionIcons: {
    marginBottom: 5,
  },
  actionButtons: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(20, 21, 23)',
  },
  actionButtonTitle: {
    fontSize: 15,
  },
  actionBtnFill: {
    fontSize: 16,
    color: 'tomato',
  },
  actionBtnout: {
    fontSize: 15,
    color: 'whitesmoke',
  },
  divider: {
    backgroundColor: 'srgb(48, 47, 47)',
    marginTop: 5,
    marginBottom: 15,
    height: 1,
  },
  similarMoviesTitle: {
    color: 'whitesmoke',
    fontSize: 13,
    marginLeft: 10,
  },
  similarMovies: {
    paddingTop: 0,
    padding: 10,
  },
});

export default Movie;
