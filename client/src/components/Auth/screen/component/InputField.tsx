import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

interface IInputField {
  label: string;
  placeholder: string;
  autoFocus: boolean;
  leftIcon: any;
  secureTextEntry: boolean;
  onChangeText: Function;
  errorMessage: string
}

const InputField = ({
  label,
  placeholder,
  autoFocus,
  leftIcon,
  secureTextEntry,
  onChangeText,
  errorMessage,
}: IInputField) => {
  const { labelStyle, inputContainerStyle, inputStyle } = styles

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
