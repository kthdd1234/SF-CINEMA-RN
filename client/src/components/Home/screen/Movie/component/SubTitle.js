import React from 'react';
import styled from 'styled-components/native';

const SubTitle = ({ ratingGrade, runtime }) => {
  return (
    <StyledSubTitle>
      <Info>{ratingGrade}</Info>
      <Dot>•</Dot>
      <Info>{runtime}</Info>
    </StyledSubTitle>
  );
};

const StyledSubTitle = styled.View`
  flex-direction: row;
`;

const Info = styled.Text`
  color: gray;
`;

const Dot = styled.Text`
  margin-right: 5px;
  margin-left: 5px;
  color: gray;
`;

export default SubTitle;
