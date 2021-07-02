import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SaveLoginIcon, CheckIcon } from '../icon';

const KeepLogined = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Button
      title='로그인 상태 유지'
      icon={checked ? <CheckIcon /> : <SaveLoginIcon />}
      titleStyle={checked ? styles.keepLoginedFill : styles.keepLoginedOut}
      containerStyle={styles.keepLoginedContainer}
      buttonStyle={styles.keepLoginedButton}
      onPress={() => setChecked(!checked)}
    />
  );
};

const styles = StyleSheet.create({
  keepLoginedOut: {
    color: 'gray',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  keepLoginedFill: {
    color: 'tomato',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  keepLoginedContainer: {
    flexDirection: 'row',
  },
  keepLoginedButton: {
    backgroundColor: 'rgb(20, 21, 23)',
  },
});

export default KeepLogined;
