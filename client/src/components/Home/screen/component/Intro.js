import React from 'react';
import styled from 'styled-components/native';

const Intro = ({ sub, desc1, desc2 }) => {
  return (
    <StyledIntro>
      <Sub>{sub}</Sub>
      <Desc>{desc1}</Desc>
      <Desc>{desc2}</Desc>
    </StyledIntro>
  );
};

const StyledIntro = styled.View`
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

export default Intro;
