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
} from '../../../requests';
import Swiper from '../component/Swiper';
import MovieList from '../component/MovieList';

const Container = () => {
  const [recommendMovieList, setRecommendMovieList] = useState([]);
  const [latestMovieList, setLatestMovieList] = useState([]);
  const [highlyRatedMovieList, setHighlyRatedMovieList] = useState([]);
  const [sfMasterpieceMovieList, setSfMasterpieceMovieList] = useState([]);
  const [superHeroMovieList, setSuperHeroMovieList] = useState([]);
  const [alienMovieList, setAlienMovieList] = useState([]);
  const [actionMovieList, setActionMovieList] = useState([]);

  const data = [
    {
      listTitle: '추천 영화',
      icon: <AntDesign name='slack' size={18} />,
      movieList: recommendMovieList,
      req: recommendMovies,
      setMovies: setRecommendMovieList,
    },
    {
      listTitle: '평점이 높은 영화',
      icon: <AntDesign name='star' size={18} />,
      movieList: highlyRatedMovieList,
      req: highlyRatedMovies,
      setMovies: setHighlyRatedMovieList,
    },
    {
      listTitle: '최신 개봉작',
      icon: <Entypo name='video' size={18} />,
      movieList: latestMovieList,
      req: latestMovies,
      setMovies: setLatestMovieList,
    },
    {
      listTitle: 'SF 명작',
      icon: <MaterialCommunityIcons name='crown' size={18} />,
      movieList: sfMasterpieceMovieList,
      req: sfMasterpiece,
      setMovies: setSfMasterpieceMovieList,
    },
    {
      listTitle: '슈퍼 히어로',
      icon: <AntDesign name='dingding' size={18} />,
      movieList: superHeroMovieList,
      req: genres,
      setMovies: setSuperHeroMovieList,
    },
    {
      listTitle: '외계인',
      icon: <MaterialCommunityIcons name='alien' size={18} />,
      movieList: alienMovieList,
      req: genres,
      setMovies: setAlienMovieList,
    },

    {
      listTitle: '액션',
      icon: <Entypo name='flash' size={18} />,
      movieList: actionMovieList,
      req: genres,
      setMovies: setActionMovieList,
    },
  ];

  useEffect(() => {
    console.log('useEffect!!');

    const effect = () => {
      try {
        data.forEach(async ({ listTitle, req, setMovies }) => {
          let getData = req === genres ? await req(listTitle) : await req(8);
          setMovies(getData.slice(0, 8));
        });
      } catch (error) {
        return console.log(error);
      }
    };
    effect();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' />
      <FlatList
        ListHeaderComponent={<Swiper />}
        data={data}
        renderItem={({ item }) => <MovieList item={item} />}
        keyExtractor={({ listTitle }) => listTitle}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20,21,23)',
  },
  poster: {
    width: width,
    height: 550,
  },
});

export default Container;
