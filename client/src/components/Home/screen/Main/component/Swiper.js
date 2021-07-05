import React, { useCallback } from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  upcomingMovies,
  latestMovies,
  highlyRatedMovies,
  genres,
  contents,
} from '../../../../../requests';
import { useNavigation } from '@react-navigation/native';
import SwiperList from 'react-native-swiper';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

const swiperMovieList = [
  {
    title: '원더우먼 1984',
    path: '/z6vQhx85xM3zAw4AWlu8fp2pNnL.jpg',
    sub: '원더우먼 1984',
    desc1: '원더우먼 갤 가돗이 돌아온다!',
    desc2: '12월 23일 극장 대개봉!',
    req: contents,
  },
  {
    title: '블랙 위도우',
    path: '/mcj4WQMpbA54UP5O3m1Q4VsyN8A.jpg',
    sub: '개봉 예정작',
    desc1: '블랙 위도우, 카오스 워킹 등',
    desc2: '내년에 개봉 될 SF 영화들!',
    req: upcomingMovies,
  },
  {
    title: '테넷',
    path: '/wzJRB4MKi3yK138bJyuL9nx47y6.jpg',
    sub: '최신 개봉 영화!',
    desc1: '테넷, 그린랜드, 뉴 뮤턴트 등',
    desc2: '최근에 개봉한 SF 작품들!',
    req: latestMovies,
  },
  {
    title: '터미네이터',
    path: '/kL6mF8gEyNKdSY0dO2a2qIBst6n.jpg',
    sub: '평점이 높은 작품',
    desc1: '터미네이터, 인터스텔라 등',
    desc2: '많은 사람들이 높은 평점을 준 작품들!',
    req: highlyRatedMovies,
  },
  {
    title: '컨택트',
    path: '/dqXMSuD3Iq1a4oCIJf4T7csrqjD.jpg',
    sub: '외계인 영화',
    desc1: '컨택트, 에이리언, 우주전쟁 등',
    desc2: '외계인을 소재로 한 다양한 영화들!',
    req: genres,
  },
  {
    title: '어벤져스: 엔드게임',
    path: '/cxeYWmWJ4RyeTwahuuCpTdiGGES.jpg',
    sub: '히어로 영화',
    desc1: '어벤져스, 스파이더맨 등',
    desc2: '인기 있는 히어로 영화들을 만나보세요!',
    req: genres,
  },
];

const Swiper = () => {
  const navigation = useNavigation();

  const onPressSwiperImage = useCallback((sub, req) => {
    const { push, navigate } = navigation;
    const navigateMovie = (movie) => {
      push('Movie', {
        headerTitle: sub,
        movie: movie,
      });
    };

    const navigateCollection = (movieList) => {
      navigate('Collection', {
        headerTitle: sub,
        movieList: movieList,
      });
    };

    const getServerData = async () => {
      let getData;
      if (sub === '원더우먼 1984') {
        getData = await req(245);
        navigateMovie(getData);
      } else if (sub === '외계인 영화') {
        getData = await req('외계인');
        navigateCollection(getData);
      } else if (sub === '히어로 영화') {
        getData = await req('슈퍼 히어로');
        navigateCollection(getData);
      } else {
        getData = await req(10);
        navigateCollection(getData);
      }
    };
    getServerData();
  }, []);

  return (
    <SwiperList
      style={styles.swiper}
      paginationStyle={styles.pagination}
      dotColor='gray'
      activeDotColor='white'
      showsButtons={false}
    >
      {swiperMovieList.map(({ sub, desc1, desc2, req, path }, key) => (
        <TouchableOpacity
          activeOpacity={1}
          key={key}
          onPress={() => onPressSwiperImage(sub, req)}
        >
          <BackDrop
            source={{ uri: `https://image.tmdb.org/t/p/original${path}` }}
          />
          <Shadow
            colors={['transparent', 'rgb(20, 21, 23)']}
            end={{ x: 0, y: 1 }}
          />
          <Intro>
            <Sub>{sub}</Sub>
            <Desc>{desc1}</Desc>
            <Desc>{desc2}</Desc>
          </Intro>
        </TouchableOpacity>
      ))}
    </SwiperList>
  );
};

const BackDrop = styled(Image)`
  width: ${width};
  height: 100%;
`;

const Shadow = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 140px;
`;

const Intro = styled.View`
  position: absolute;
  bottom: 0;
  left: 10px;
  margin-bottom: 40px;
`;

const Sub = styled.Text`
  margin-bottom: 5px;
  color: white;
  font-size: 31px;
  font-weight: bold;
`;

const Desc = styled.Text`
  color: rgb(222, 218, 209);
  font-size: 15px;
`;

const styles = StyleSheet.create({
  swiper: {
    position: 'relative',
    height: 570,
  },
  pagination: {
    marginBottom: 18,
    marginRight: 300,
    bottom: 0,
  },
});

export default Swiper;
