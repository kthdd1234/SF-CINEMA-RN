import React from 'react';
import styled from 'styled-components/native';

interface ISubTitle {
  ratingGrade: string;
  runtime: string;
}

const SubTitle = ({ ratingGrade, runtime }: ISubTitle) => {
  return (
    <StyledSubTitle>
      <Info>{ratingGrade}</Info>
      <Dot>•</Dot>
      <Info>{runtime}</Info>
    </StyledSubTitle>
  );
};

const { View, Text }: any = styled;

const StyledSubTitle = View`
  flex-direction: row;
`;

const Info = Text`
  color: gray;
`;

const Dot = Text`
  margin-right: 5px;
  margin-left: 5px;
  color: gray;
`;

export default SubTitle;
