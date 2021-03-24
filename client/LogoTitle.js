import React from 'react';
import { StyleSheet, Image } from 'react-native';
import SFCINEMA from './SFCINEMA.png';

const LogoTitle = () => {
  return <Image style={styles.logo} source={SFCINEMA} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    borderRadius: 15,
    resizeMode: 'contain',
  },
});

export default LogoTitle;
