import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Loding = () => {
  return (
    <StyledLoding>
      <ActivityIndicator size={40} color='red' />
    </StyledLoding>
  );
};

const StyledLoding = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export default Loding;
