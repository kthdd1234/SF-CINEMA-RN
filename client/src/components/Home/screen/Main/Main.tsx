import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import {
  SlackIcon,
  StarIcon,
  VideoIcon,
  CrownIcon,
  DingdingIcon,
  AlienIcon,
  FlashIcon,
} from './icon';
import {
  recommendMovies,
  highlyRatedMovies,
  latestMovies,
  sfMasterpiece,
} from './request';
import { genres } from '../../../Category/screen/request';
import Swiper from './component/Swiper';
import MovieList from './component/MovieList';
import styled from 'styled-components/native';

interface IData {
  listTitle: string;
  icon: any;
  req: Function;
  movieList: Array<any>;
}

const data: IData[] = [
  {
    listTitle: '추천 영화',
    icon: <SlackIcon />,
    req: recommendMovies,
    movieList: [],
  },
  {
    listTitle: '평점이 높은 영화',
    icon: <StarIcon />,
    req: highlyRatedMovies,
    movieList: [],
  },
  {
    listTitle: '최신 개봉작',
    icon: <VideoIcon />,
    req: latestMovies,
    movieList: [],
  },
  {
    listTitle: 'SF 명작',
    icon: <CrownIcon />,
    req: sfMasterpiece,
    movieList: [],
  },
  {
    listTitle: '슈퍼 히어로',
    icon: <DingdingIcon />,
    req: genres,
    movieList: [],
  },
  {
    listTitle: '외계인',
    icon: <AlienIcon />,
    req: genres,
    movieList: [],
  },
  {
    listTitle: '액션',
    icon: <FlashIcon />,
    req: genres,
    movieList: [],
  },
];

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log('main effect!');

    const effect = async () => {
      try {
        const newData = data.map(async (obj) => {
          const { listTitle, req } = obj;
          const getData = req === genres ? await req(listTitle) : await req(8);
          obj.movieList = getData;
          return obj;
        });
        setMovies(await Promise.all(newData));
      } catch (error) {
        return console.log(error);
      }
    };
    effect();
  }, []);

  return (
    <StyledMain>
      <FlatList
        ListHeaderComponent={<Swiper />}
        data={movies}
        renderItem={({ item }) => <MovieList item={item} />}
        keyExtractor={({ listTitle }) => listTitle}
      />
    </StyledMain>
  );
};

const { View }: any = styled

const StyledMain = View`
  flex: 1;
  background-color: rgb(20, 21, 23);
`;

export default Main;
