import React from 'react';
import styled from 'styled-components/native';

interface ISpec {
  director: string;
  actors: string;
  genre: string;
  releaseDate: number;
  nation: string;
}

const Spec = ({ director, actors, genre, releaseDate, nation }: ISpec) => {
  const spec = [
    { desc: `감독: ${director}` },
    { desc: `출연: ${actors}` },
    {
      desc: `개요: ${genre} / ${nation} / ${String(releaseDate).slice(0, 4)}년`,
    },
  ];

  return (
    <StyledSpec>
      {spec.map(({ desc }, descIdx) => (
        <Desc key={descIdx} numberOfLines={1}>
          {desc}
        </Desc>
      ))}
    </StyledSpec>
  );
};

const { View, Text }: any = styled;

const StyledSpec = View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Desc = Text`
  margin-bottom: 3px;
  color: gray;
`;

export default Spec;
