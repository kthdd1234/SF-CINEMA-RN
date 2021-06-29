import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const InputField = ({
  label,
  placeholder,
  autoFocus,
  leftIcon,
  secureTextEntry,
  onChangeText,
  errorMessage,
}) => {
  return (
    <Input
      label={label}
      labelStyle={styles.label}
      placeholder={placeholder}
      autoFocus={autoFocus}
      leftIcon={leftIcon}
      leftIconContainerStyle={styles.leftIcon}
      selectionColor='red'
      secureTextEntry={secureTextEntry}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      onChangeText={(value) => onChangeText(value)}
      errorMessage={errorMessage}
    />
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'tomato',
  },
  leftIcon: {
    color: 'white',
  },
  inputContainer: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  input: {
    color: 'white',
    paddingLeft: 5,
  },
});

export default InputField;
