import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Divider, Button } from 'react-native-elements';
import { AntDesign, Entypo } from 'react-native-vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  genres,
  likeCompleted,
  saveCancel,
  saveCompleted,
  likeCancel,
} from '../../requests';
import { LinearGradient } from 'expo-linear-gradient';
import MovieList from '../Home/MovieList';
import Trailer from './Trailer';
import { FlatList } from 'react-native-gesture-handler';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const PlusIcon = () => {
  return (
    <View style={styles.actionIcons}>
      <AntDesign name='plus' size={23} color='whitesmoke' />
    </View>
  );
};

const LikeIcon = ({ size }) => {
  return (
    <View style={styles.actionIcons}>
      <AntDesign name='like2' size={size} color='whitesmoke' />
    </View>
  );
};

const PlayIcon = () => {
  return (
    <View style={styles.actionIcons}>
      <AntDesign name='playcircleo' size={23} color='whitesmoke' />
    </View>
  );
};

const DotsVerticalIcon = () => {
  return (
    <View style={styles.actionIcons}>
      <Entypo name='dots-three-vertical' size={23} color='whitesmoke' />
    </View>
  );
};

const CheckIcon = () => {
  return (
    <View style={styles.actionIcons}>
      <AntDesign name='check' size={23} color='tomato' />
    </View>
  );
};

const LikeFillIcon = () => {
  return (
    <View style={styles.actionIcons}>
      <AntDesign name='like1' size={23} color='tomato' />
    </View>
  );
};

const BackDrop = ({ userRating, numberOfLikes, backDrop }) => {
  return (
    <View style={styles.backDropWrap}>
      <Image
        style={styles.backDrop}
        source={{
          uri: `https://image.tmdb.org/t/p/original${backDrop}`,
        }}
      />
      <UserRatings userRating={userRating} numberOfLikes={numberOfLikes} />
      <LinearGradient
        colors={['transparent', 'rgb(20, 21, 23)']}
        style={styles.contentsShadow}
        end={{ x: 0, y: 1 }}
      />
    </View>
  );
};

const MovieTitle = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const SubTitle = ({ ratingGrade, runtime }) => {
  return (
    <View style={styles.subTitle}>
      <Text style={styles.ratingGrade}>{ratingGrade}</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.runtime}>{runtime}</Text>
    </View>
  );
};

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
    <View style={styles.plotWrap}>
      <Text
        style={styles.plot}
        numberOfLines={numberOfLines}
        ellipsizeMode='tail'
      >
        {plot}
      </Text>
    </View>
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
          icon={<AntDesign name='down' color='gray' />}
          onPress={() => {
            setNumberOfLines(20);
            setViewmore(false);
          }}
        />
      ) : null}
    </View>
  );
};

const Summary = ({ director, actors, genre, releaseDate }) => {
  return (
    <View>
      <View style={styles.summaryWrap}>
        <Text style={styles.director}>감독: {director}</Text>
        <Text style={styles.actors}>출연: {actors}</Text>
        <Text style={styles.characteristic}>
          특징: {genre} / {String(releaseDate).slice(0, 4)}년
        </Text>
      </View>
    </View>
  );
};

const SimilarMovies = ({ similarMovies, navigation }) => {
  return (
    <View>
      <Text style={styles.similarMoviesTitle}>
        <AntDesign name='bulb1' color='whitesmoke' /> 비슷한 작품들
      </Text>
      <View style={styles.similarMovies}>
        <MovieList movieList={similarMovies} navigation={navigation} />
      </View>
    </View>
  );
};

const UserRatings = ({ userRating, numberOfLikes }) => {
  return (
    <View style={styles.userRatingContainer}>
      <View style={styles.userRatingWrap}>
        <Text style={styles.userRatingText}>유저평점</Text>
        <Text style={styles.userRating}>{userRating}</Text>
      </View>
      <View style={styles.numberOfLikesWrap}>
        <Text style={styles.numberOfLikesText}>재밌어요</Text>
        <Text style={styles.numberOfLikes}>{numberOfLikes}</Text>
      </View>
    </View>
  );
};

const MovieDetails = ({
  route,
  navigation,
  profile,
  updateProfileToReduxStore,
}) => {
  const { movie } = route.params;
  const [similarMovies, setSimilarMovies] = useState([]);
  const [viewmore, setViewmore] = useState(true);
  const [numberOfLines, setNumberOfLines] = useState(3);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (movie.plot.length < 100) {
      setViewmore(false);
    }
    const getSimilarMovies = async () => {
      const similarMovieData = await genres(movie.genre, 8);
      setSimilarMovies(similarMovieData);
    };
    getSimilarMovies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          playing ? (
            <Trailer videoId={movie.videoId} playing={true} />
          ) : (
            <BackDrop
              setPlaying={setPlaying}
              backDrop={movie.backDrop}
              userRating={movie.userRating}
              numberOfLikes={movie.numberOfLikes}
            />
          )
        }
        ListEmptyComponent={
          <View style={styles.movieWrap}>
            <MovieTitle title={movie.title} />

            <SubTitle
              userRating={movie.userRating}
              ratingGrade={movie.ratingGrade}
              runtime={movie.runtime}
            />

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
            />

            <Divider style={styles.divider} />
          </View>
        }
        ListFooterComponent={
          <SimilarMovies
            similarMovies={similarMovies}
            navigation={navigation}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20, 21, 23)',
  },
  backDropWrap: {
    position: 'relative',
  },
  backDrop: {
    width: SCREEN_WIDTH,
    height: hp('35%'),
  },

  contentsShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 40,
  },

  userRatingContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 20,
    left: 13,
    zIndex: 2,
  },
  userRatingWrap: {
    backgroundColor: 'black',
    opacity: 0.8,
    borderWidth: 1,
    borderColor: 'tomato',
    marginRight: 10,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 60,
  },
  userRatingText: {
    marginLeft: 5,
    color: 'tomato',
  },
  userRating: {
    marginLeft: 5,
    color: 'tomato',
  },
  numberOfLikesWrap: {
    backgroundColor: 'black',
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    opacity: 0.8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'whitesmoke',
    width: 80,
    height: 60,
  },
  numberOfLikesText: {
    marginLeft: 5,
    color: 'whitesmoke',
  },
  numberOfLikes: {
    marginLeft: 5,
    color: 'whitesmoke',
  },
  movieWrap: {
    marginTop: 13,
    paddingLeft: 13,
    paddingRight: 13,
  },
  title: {
    color: 'whitesmoke',
    fontWeight: 'bold',
    fontSize: 21,
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
    marginTop: 1,
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

export default MovieDetails;
