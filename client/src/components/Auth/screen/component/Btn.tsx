import React from 'react';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

interface IBtn {
  title: string;
  onPress: (event: GestureResponderEvent) => void
}

const Btn = ({ title, onPress }: IBtn) => {
  const { buttonStyle, titleStyle } = styles;

  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'red',
  },
  titleStyle: {
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
});

export default Btn;
