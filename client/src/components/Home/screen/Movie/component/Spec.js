import React from 'react';
import styled from 'styled-components/native';

const Spec = ({ director, actors, genre, releaseDate, nation }) => {
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

const StyledSpec = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Desc = styled.Text`
  margin-bottom: 3px;
  color: gray;
`;

export default Spec;
