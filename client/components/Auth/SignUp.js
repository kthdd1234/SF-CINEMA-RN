import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Input, Icon, CheckBox, Button } from 'react-native-elements';
import { requestSignUp } from '../../requests';

const UserIcon = () => {
  return <Icon name='adduser' type='antdesign' color='gray' />;
};

const unlockIcon = () => {
  return <Icon name='unlock' type='antdesign' color='gray' />;
};

const lockIcon = () => {
  return <Icon name='lock1' type='antdesign' color='gray' />;
};

function SignUp({ navigation }) {
  const [newId, setNewId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errNewId, setErrId] = useState('');
  const [errNewPassword, setErrPassword] = useState('');
  const [errConfirmPassword, setErrConfirmPassword] = useState('');

  const errMessageNewId = '아이디를 입력해주세요.';
  const errMessageNewPassword = '비밀번호를 입력해주세요.';
  const errMessageConfirmPassword = {
    notEnter: '비밀번호를 한번 더 입력해주세요.',
    notMatch: '비밀번호가 일치 하지 않습니다.',
  };

  const handleInputErrorMessage = (
    inputId,
    inputPassword,
    inputConfirmPassword
  ) => {
    if (inputId !== null) {
      inputId !== '' ? setErrId('') : setErrId(errMessageNewId);
    }
    if (inputPassword !== null) {
      inputPassword !== ''
        ? setErrPassword('')
        : setErrPassword(errMessageNewPassword);
    }
    if (inputConfirmPassword !== null) {
      inputConfirmPassword !== ''
        ? setErrConfirmPassword('')
        : setErrConfirmPassword(errMessageConfirmPassword.notEnter);
    }
  };

  const verifyMatchConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setErrConfirmPassword(errMessageConfirmPassword.notMatch);
      return 'not Matched';
    } else {
      return 'password Matched';
    }
  };

  const verifyInputNewUserId = useCallback(
    (inputId) => {
      handleInputErrorMessage(inputId, null, null);
      setNewId(inputId);
    },
    [newId]
  );

  const verifyInputNewUserPassword = useCallback(
    (inputPassword) => {
      handleInputErrorMessage(null, inputPassword, null);
      setNewPassword(inputPassword);
    },
    [newPassword]
  );

  const verifyInputConfirmPassword = useCallback(
    (inputConfirmPassword) => {
      handleInputErrorMessage(null, null, inputConfirmPassword);
      setConfirmPassword(inputConfirmPassword);
    },
    [confirmPassword]
  );

  const hadleSignUpToggle = useCallback(() => {
    if (newId !== '' && newPassword !== '') {
      if (confirmPassword !== '') {
        verifyMatchConfirmPassword(newPassword, confirmPassword) ===
        'password Matched'
          ? sendSignUpData(newId, newPassword)
          : setErrConfirmPassword(errMessageConfirmPassword.notMatch);
      } else {
        return setErrConfirmPassword(errMessageConfirmPassword.notEnter);
      }
    } else {
      console.log('실패!');
      return handleInputErrorMessage(newId, newPassword, confirmPassword);
    }
  });

  const sendSignUpData = useCallback((newId, newPassword) => {
    const communicateServer = async () => {
      try {
        const result = await requestSignUp(newId, newPassword);
        if (result === '회원가입 완료!') {
          Alert.alert('회원가입이 완료되었습니다 :)', '로그인 해주세요.');
          navigation.goBack();
        }
      } catch (error) {
        return console.log(error);
      }
    };
    communicateServer();
  });

  return (
    <View style={styles.signUpContainer}>
      <Input
        label='신규 가입 아이디'
        labelStyle={styles.label}
        placeholder='아이디를 입력해주세요.'
        autoFocus={true}
        leftIcon={UserIcon}
        selectionColor='red'
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        onChangeText={(value) => verifyInputNewUserId(value)}
        errorMessage={errNewId}
      />
      <Input
        label='비밀번호'
        labelStyle={styles.label}
        placeholder='비밀번호를 입력해주세요.'
        leftIcon={unlockIcon}
        secureTextEntry={true}
        selectionColor='red'
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        onChangeText={(value) => verifyInputNewUserPassword(value)}
        errorMessage={errNewPassword}
      />
      <Input
        label='비밀번호 확인'
        labelStyle={styles.label}
        placeholder='비밀번호를 한번 더 입력해주세요.'
        leftIcon={lockIcon}
        secureTextEntry={true}
        selectionColor='red'
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        onChangeText={(value) => verifyInputConfirmPassword(value)}
        errorMessage={errConfirmPassword}
      />

      <Button
        buttonStyle={styles.buttonWrap}
        title='회원가입 하기'
        titleStyle={styles.buttonText}
        onPress={hadleSignUpToggle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(20, 21, 23)',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  label: {
    color: 'tomato',
  },
  inputContainer: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  input: {
    color: 'white',
    paddingLeft: 5,
  },

  buttonWrap: {
    backgroundColor: 'red',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
  },
  buttonText: {
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
});

export default SignUp;
