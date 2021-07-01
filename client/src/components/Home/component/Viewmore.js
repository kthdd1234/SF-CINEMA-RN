import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const Viewmore = ({ setViewmore }) => {
  return (
    <Button
      title={' 더보기'}
      titleStyle={styled.title}
      buttonStyle={styled.btn}
      onPress={() => setViewmore(true)}
    />
  );
};

const styled = StyleSheet.create({
  title: {
    fontSize: 14,
    color: 'gray',
  },
  btn: {
    backgroundColor: 'rgb(20, 21, 23)',
  },
});

export default Viewmore;
