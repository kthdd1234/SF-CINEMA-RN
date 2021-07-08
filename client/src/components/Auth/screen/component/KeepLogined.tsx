import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SaveLoginIcon, CheckIcon } from '../icon';

const KeepLogined = () => {
  const [checked, setChecked] = useState(false);
  const { titleFill, titleOut, containerStyle, buttonStyle } = styles

  return (
    <Button
      title='로그인 상태 유지'
      icon={checked ? <CheckIcon /> : <SaveLoginIcon />}
      titleStyle={checked ? titleFill : titleOut}
      containerStyle={containerStyle}
      buttonStyle={buttonStyle}
      onPress={() => setChecked(!checked)}
    />
  );
};

const styles = StyleSheet.create({
  titleOut: {
    color: 'gray',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  titleFill: {
    color: 'tomato',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  containerStyle: {
    flexDirection: 'row',
  },
  buttonStyle: {
    backgroundColor: 'rgb(20, 21, 23)',
  },
});

export default KeepLogined;
