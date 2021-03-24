import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
  View,
} from 'react-native';

import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from 'react-native-vector-icons';
import {
  latestMovies,
  recommendMovies,
  highlyRatedMovies,
  genres,
  sfMasterpiece,
} from '../../requests';
import SwiperList from './SwiperList';
import MovieListContainer from './MovieListContainer';

const Item = ({ renderMovies, navigation }) => {
  return (
    <MovieListContainer renderMovies={renderMovies} navigation={navigation} />
  );
};

const Main = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return <Item renderMovies={item} navigation={navigation} />;
  };

  const [recommendMovieList, setRecommendMovieList] = useState([]);
  const [latestMovieList, setLatestMovieList] = useState([]);
  const [highlyRatedMovieList, setHighlyRatedMovieList] = useState([]);
  const [sfMasterpieceMovieList, setSfMasterpieceMovieList] = useState([]);
  const [superHeroMovieList, setSuperHeroMovieList] = useState([]);
  const [alienMovieList, setAlienMovieList] = useState([]);
  const [actionMovieList, setActionMovieList] = useState([]);

  const allMovieList = [
    {
      movieListTitle: '추천 영화',
      icon: <AntDesign name='slack' size={18} />,
      movieList: recommendMovieList,
    },
    {
      movieListTitle: '평점이 높은 영화',
      icon: <AntDesign name='star' size={18} />,
      movieList: highlyRatedMovieList,
    },
    {
      movieListTitle: '최신 개봉작',
      icon: <Entypo name='video' size={18} />,
      movieList: latestMovieList,
    },
    {
      movieListTitle: '슈퍼 히어로',
      icon: <AntDesign name='dingding' size={18} />,
      movieList: superHeroMovieList,
    },
    {
      movieListTitle: '외계인',
      icon: <MaterialCommunityIcons name='alien' size={18} />,
      movieList: alienMovieList,
    },
    {
      movieListTitle: 'SF 명작',
      icon: <MaterialCommunityIcons name='crown' size={18} />,
      movieList: sfMasterpieceMovieList,
    },
    {
      movieListTitle: '액션',
      icon: <Entypo name='flash' size={18} />,
      movieList: actionMovieList,
    },
  ];

  useEffect(() => {
    console.log('Main useEffect!!');

    const getServerData = async () => {
      const count = 8;
      try {
        const recommendMovieData = await recommendMovies(count);
        const latestMovieData = await latestMovies(count);
        const highlyRatedMovieData = await highlyRatedMovies(count);
        const alienMovieData = await genres('외계인', count);
        const sfMasterpieceMovieData = await sfMasterpiece(count);
        const superHeroMovieData = await genres('슈퍼 히어로', count);
        const actionMovieData = await genres('액션', count);

        setRecommendMovieList(recommendMovieData);
        setLatestMovieList(latestMovieData);
        setHighlyRatedMovieList(highlyRatedMovieData);
        setAlienMovieList(alienMovieData);
        setSfMasterpieceMovieList(sfMasterpieceMovieData);
        setSuperHeroMovieList(superHeroMovieData);
        setActionMovieList(actionMovieData);
      } catch (error) {
        return console.log(error);
      }
    };
    getServerData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor='transparent' />
      <FlatList
        ListHeaderComponent={<SwiperList navigation={navigation} />}
        data={allMovieList}
        renderItem={renderItem}
        keyExtractor={(item) => item.movieListTitle}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgb(20,21,23)',
  },
  poster: {
    width: width,
    height: 550,
  },
});

export default Main;
