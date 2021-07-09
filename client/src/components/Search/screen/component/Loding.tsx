import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Loding = () => {
  return <StyledLoding size={40} color='red' />;
};

const StyledLoding = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Loding;
