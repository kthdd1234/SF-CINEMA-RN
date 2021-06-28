import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const Btn = ({ title, onPress }) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={styles.btn}
      titleStyle={styles.btnTitle}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'red',
  },
  btnTitle: {
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
});

export default Btn;
