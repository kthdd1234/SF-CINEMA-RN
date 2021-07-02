import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, FlatList, View } from 'react-native';
import {
  SlackIcon,
  StarIcon,
  VideoIcon,
  CrownIcon,
  DingdingIcon,
  AlienIcon,
  FlashIcon,
} from '../icon';
import {
  latestMovies,
  recommendMovies,
  highlyRatedMovies,
  genres,
  sfMasterpiece,
} from '../../../../requests';
import Swiper from '../component/Swiper';
import MovieList from '../component/MovieList';

const Home = () => {
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
      icon: <SlackIcon />,
      movieList: recommendMovieList,
      req: recommendMovies,
      setMovies: setRecommendMovieList,
    },
    {
      listTitle: '평점이 높은 영화',
      icon: <StarIcon />,
      movieList: highlyRatedMovieList,
      req: highlyRatedMovies,
      setMovies: setHighlyRatedMovieList,
    },
    {
      listTitle: '최신 개봉작',
      icon: <VideoIcon />,
      movieList: latestMovieList,
      req: latestMovies,
      setMovies: setLatestMovieList,
    },
    {
      listTitle: 'SF 명작',
      icon: <CrownIcon />,
      movieList: sfMasterpieceMovieList,
      req: sfMasterpiece,
      setMovies: setSfMasterpieceMovieList,
    },
    {
      listTitle: '슈퍼 히어로',
      icon: <DingdingIcon />,
      movieList: superHeroMovieList,
      req: genres,
      setMovies: setSuperHeroMovieList,
    },
    {
      listTitle: '외계인',
      icon: <AlienIcon />,
      movieList: alienMovieList,
      req: genres,
      setMovies: setAlienMovieList,
    },

    {
      listTitle: '액션',
      icon: <FlashIcon />,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20,21,23)',
  },
});

export default Home;
