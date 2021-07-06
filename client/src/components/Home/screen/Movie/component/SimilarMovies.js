import React, { useState, useEffect } from 'react';
import { genres } from '../../../../../requests';
import { Bulb1 } from '../icon';
import List from '../../Main/component/List';
import styled from 'styled-components/native';

const SimilarMovies = ({ genre }) => {
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

const StyledSimilarMovies = styled.View`
  margin-left: 10px;
`;

const Sub = styled.Text`
  margin-bottom: 10px;
  color: whitesmoke;
  font-size: 13px;
`;

export default SimilarMovies;