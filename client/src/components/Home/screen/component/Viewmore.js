import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const Viewmore = ({ setViewmore }) => {
  return (
    <Button
      title={' 더보기'}
      titleStyle={style.title}
      buttonStyle={style.btn}
      onPress={() => setViewmore(true)}
    />
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 14,
    color: 'gray',
  },
  btn: {
    backgroundColor: 'rgb(20, 21, 23)',
  },
});

export default Viewmore;
