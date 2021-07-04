import React from 'react';
import CategoryList from './component/CategoryList';
import { genres, search } from '../../../requests';

const characteristicList = [
  { key: 'space', value: '우주 탐사', method: genres },
  { key: 'alien', value: '외계인', method: genres },
  { key: 'superHero', value: '슈퍼 히어로', method: genres },
  { key: 'action', value: '액션', method: genres },
  { key: 'calamity', value: '재난', method: genres },
  { key: 'zombie', value: '좀비', method: genres },
  { key: 'timeTravel', value: '시간여행', method: genres },
  { key: 'monster', value: '몬스터', method: genres },
  { key: 'AI', value: '가상 현실 또는 AI', method: genres },
  { key: 'disaster', value: '인류 멸망 시나리오', method: search },
  { key: 'survival', value: '생존 서바이벌', method: search },
  { key: 'Nolan', value: '크리스토퍼 놀란', method: search },
  { key: 'Robert', value: '로버트 다우니 주니어', method: search },
  { key: 'Scarlett', value: '스칼렛 요한슨', method: search },
  { key: 'animation', value: '애니메이션', method: search },
];

const Characteristic = () => {
  return <CategoryList data={characteristicList} />;
};

export default Characteristic;
