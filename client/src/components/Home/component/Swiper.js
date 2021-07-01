import React, { useCallback } from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import SwiperList from 'react-native-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import {
  upcomingMovies,
  latestMovies,
  highlyRatedMovies,
  genres,
  contents,
} from '../../../requests';
import Intro from './Intro';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const swiperMovieList = [
  {
    title: '원더우먼 1984',
    path: '/z6vQhx85xM3zAw4AWlu8fp2pNnL.jpg',
    mainSub: '원더우먼 1984',
    sentence1: '원더우먼 갤 가돗이 돌아온다!',
    sentence2: '12월 23일 극장 대개봉!',
    req: contents,
  },
  {
    title: '블랙 위도우',
    path: '/mcj4WQMpbA54UP5O3m1Q4VsyN8A.jpg',
    mainSub: '개봉 예정작',
    sentence1: '블랙 위도우, 카오스 워킹 등',
    sentence2: '내년에 개봉 될 SF 영화들!',
    req: upcomingMovies,
  },
  {
    title: '테넷',
    path: '/wzJRB4MKi3yK138bJyuL9nx47y6.jpg',
    mainSub: '최신 개봉 영화!',
    sentence1: '테넷, 그린랜드, 뉴 뮤턴트 등',
    sentence2: '최근에 개봉한 SF 작품들!',
    req: latestMovies,
  },
  {
    title: '터미네이터',
    path: '/kL6mF8gEyNKdSY0dO2a2qIBst6n.jpg',
    mainSub: '평점이 높은 작품',
    sentence1: '터미네이터, 인터스텔라 등',
    sentence2: '많은 사람들이 높은 평점을 준 작품들!',
    req: highlyRatedMovies,
  },
  {
    title: '컨택트',
    path: '/dqXMSuD3Iq1a4oCIJf4T7csrqjD.jpg',
    mainSub: '외계인 영화',
    sentence1: '컨택트, 에이리언, 우주전쟁 등',
    sentence2: '외계인을 소재로 한 다양한 영화들!',
    req: genres,
  },
  {
    title: '어벤져스: 엔드게임',
    path: '/cxeYWmWJ4RyeTwahuuCpTdiGGES.jpg',
    mainSub: '히어로 영화',
    sentence1: '어벤져스, 스파이더맨 등',
    sentence2: '인기 있는 히어로 영화들을 만나보세요!',
    req: genres,
  },
];

const Swiper = () => {
  const navigation = useNavigation();

  const onPressSwiperImage = useCallback((mainSub, req) => {
    const { push, navigate } = navigation;
    const navigateMovie = (movie) => {
      push('Movie', {
        headerTitle: mainSub,
        movie: movie,
      });
    };

    const navigateCollection = (movieList) => {
      navigate('Collection', {
        headerTitle: mainSub,
        movieList: movieList,
      });
    };

    const getServerData = async () => {
      let getData;
      if (mainSub === '원더우먼 1984') {
        getData = await req(245);
        navigateMovie(movie);
      } else if (mainSub === '외계인 영화') {
        getData = await req('외계인');
        navigateCollection(movieList);
      } else if (mainSub === '히어로 영화') {
        getData = await req('슈퍼 히어로');
        navigateCollection(movieList);
      } else {
        getData = await req(10);
        navigateCollection(movieList);
      }
    };
    getServerData();
  }, []);

  return (
    <View>
      <SwiperList
        style={styles.wrapper}
        showsButtons={false}
        containerStyle={styles.swiperContainer}
        paginationStyle={styles.dotPagination}
        dotColor='gray'
        activeDotColor='white'
      >
        {swiperMovieList.map(
          ({ mainSub, sentence1, sentence2, req, path }, key) => (
            <TouchableOpacity
              activeOpacity={1}
              key={key}
              onPress={() => onPressSwiperImage(mainSub, req)}
            >
              <Image
                style={styles.swiperImage}
                source={{
                  uri: `https://image.tmdb.org/t/p/original${path}`,
                }}
              />
              <LinearGradient
                colors={['transparent', 'rgb(20, 21, 23)']}
                style={styles.contentsShadow}
                end={{ x: 0, y: 1 }}
              />
              <Intro
                mainSub={mainSub}
                sentence1={sentence1}
                sentence2={sentence2}
              />
            </TouchableOpacity>
          )
        )}
      </SwiperList>
    </View>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    position: 'relative',
    height: 570,
  },
  swiperImage: {
    width: width,
    height: '100%',
  },
  dotPagination: {
    bottom: 0,
    marginBottom: 18,
    marginRight: 300,
  },
  contentsShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 140,
  },
});

export default Swiper;
