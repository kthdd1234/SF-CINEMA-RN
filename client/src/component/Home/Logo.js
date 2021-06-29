import React from 'react';
import { Image } from 'react-native';
import styled from "styled-components";
import SFCINEMA from './Image/SFCINEMA.png';

const Logo = () => {
  return <StyledLogo source={SFCINEMA} />;
}

const StyledLogo = styled(Image)`
  width: 150px
  height: 150px;
  border-radius: 15px;
  resize-mode: contain; 
`

export default Logo;
