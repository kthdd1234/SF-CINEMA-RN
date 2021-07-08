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
  const { labelStyle, inputContainerStyle, inputStyle  } = styles

  return (
    <Input
      label={label}
      labelStyle={labelStyle}
      placeholder={placeholder}
      autoFocus={autoFocus}
      leftIcon={leftIcon}
      selectionColor='red'
      secureTextEntry={secureTextEntry}
      inputContainerStyle={inputContainerStyle}
      inputStyle={inputStyle}
      onChangeText={(value) => onChangeText(value)}
      errorMessage={errorMessage}
    />
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    color: 'tomato',
  },
  inputContainerStyle: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  inputStyle: {
    color: 'white',
    paddingLeft: 5,
  },
});

export default InputField;
