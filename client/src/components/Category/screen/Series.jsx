import React from 'react';
import CategoryList from '../component/CategoryList';
import { movieSeries } from '../../../requests';

const seriesList = [
  { key: 'The Avengers', value: '어벤져스', method: movieSeries },
  { key: 'Transformers', value: '트랜스포머', method: movieSeries },
  { key: '28 Days Later', value: '28일 후', method: movieSeries },
  { key: 'Batman', value: '배트맨', method: movieSeries },
  { key: 'Men In Black', value: '맨 인 블랙', method: movieSeries },
  { key: 'Blade Runner', value: '블레이드 러너', method: movieSeries },
  { key: 'Back to the Future', value: '백 투 더 퓨쳐', method: movieSeries },
  { key: 'Planet of the Apes', value: '혹성탈출', method: movieSeries },
  { key: 'Divergent', value: '다이버전트', method: movieSeries },
  { key: 'The Hunger Games', value: '헝거게임', method: movieSeries },
  { key: 'The Maze Runner', value: '메이즈 러너', method: movieSeries },
  { key: 'Thor', value: '토르', method: movieSeries },
  {
    key: 'Guardians of the Galaxy',
    value: '가디언즈 오브 갤럭시',
    method: movieSeries,
  },
  { key: 'Cloverfield', value: '클로버필드', method: movieSeries },
  { key: 'The Terminator', value: '터미네이터', method: movieSeries },
  { key: 'Captain America', value: '캡틴 아메리카', method: movieSeries },
  { key: 'Spiderman', value: '스파이더맨', method: movieSeries },
  { key: 'Pacific Rim', value: '퍼시픽 림', method: movieSeries },
  { key: 'Star Trek', value: '스타트렉', method: movieSeries },
  { key: 'Star Wars', value: '스타워즈', method: movieSeries },
  { key: 'Alien', value: '에이리언', method: movieSeries },
  { key: 'Resident Evil', value: '레지던트 이블', method: movieSeries },
  { key: 'Iron Man', value: '아이언맨', method: movieSeries },
  { key: 'Ant-Man', value: '앤트맨', method: movieSeries },
  { key: 'Deadpool', value: '데드풀', method: movieSeries },
  { key: 'X-MEN', value: '엑스맨', method: movieSeries },
  { key: 'A Quiet Place', value: '콰이어트 플레이스', method: movieSeries },
  { key: 'Jurassic World', value: '쥬라기 월드', method: movieSeries },
];

const Series = () => {
  return <CategoryList data={seriesList} />;
};

export default Series;
