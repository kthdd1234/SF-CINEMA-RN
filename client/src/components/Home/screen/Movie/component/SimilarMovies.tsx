import React, { useState, useEffect } from 'react';
import { genres } from '../../../../Category/screen/request';
import { Bulb1 } from '../icon';
import List from '../../Main/component/List';
import styled from 'styled-components/native';

interface IGenre {
  genre: string;
}

const SimilarMovies = ({ genre }: IGenre) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const getSimilarMovies = async () => {
      const similarMovieData = await genres(genre);
      setSimilarMovies(similarMovieData.slice(0, 8));
    };
    getSimilarMovies();
  }, []);

  return (
    <StyledSimilarMovies>
      <Sub>
        <Bulb1 /> 비슷한 작품들
      </Sub>
      <List movieList={similarMovies} />
    </StyledSimilarMovies>
  );
};

const { View, Text }: any = styled;

const StyledSimilarMovies = View`
  margin-left: 10px;
`;

const Sub = Text`
  margin-bottom: 10px;
  color: whitesmoke;
  font-size: 13px;
`;

export default SimilarMovies;
