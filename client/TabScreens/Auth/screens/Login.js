import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { requestLogin, userProfile } from '../../../requests';
import { UserIcon, LockIcon, SaveLoginIcon, CheckIcon } from "../icons";

const InputId = ({ errId, verifyInputUserId }) => {
  return (
    <Input
      label='아이디'
      labelStyle={styles.label}
      placeholder='아이디를 입력해주세요.'
      autoFocus={true}
      leftIcon={UserIcon}
      leftIconContainerStyle={styles.leftIcon}
      selectionColor='red'
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      onChangeText={(value) => verifyInputUserId(value)}
      errorMessage={errId}
    />
  );
};

const InputPassword = ({ errPassword, verifyInputUserPassword }) => {
  return (
    <Input
      label='비밀번호'
      labelStyle={styles.label}
      placeholder='비밀번호를 입력해주세요.'
      leftIcon={LockIcon}
      leftIconContainerStyle={styles.leftIcon}
      secureTextEntry={true}
      selectionColor='red'
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      onChangeText={(value) => verifyInputUserPassword(value)}
      errorMessage={errPassword}
    />
  );
};

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

const Space = ({ height }) => {
  return (
    <View
      style={{
        height: height,
      }}
    />
  );
};

const LoginButton = ({ handleLoginToggle }) => {
  return (
    <View>
      <Space height={20} />
      <Button
        title='로그인 하기'
        titleStyle={styles.loginButtonTitle}
        buttonStyle={styles.loginButton}
        onPress={handleLoginToggle}
      />
      <Space height={5} />
    </View>
  );
};

const SignUpButton = ({ navigation }) => {
  return (
    <Button
      title='회원가입 하기'
      titleStyle={styles.loginButtonTitle}
      buttonStyle={styles.loginButton}
      onPress={() => navigation.navigate('SignUp')}
    />
  );
};

const Login = ({ navigation, sendProfileToReduxStore }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errId, setErrId] = useState('');
  const [errPassword, setErrPassword] = useState('');

  const errMessageId = '아이디를 입력해주세요.';
  const errMessagePassword = '비밀번호를 입력해주세요.';

  const handleInputErrorMessage = (inputId, inputPassword) => {
    if (inputId !== null) {
      inputId !== '' ? setErrId('') : setErrId(errMessageId);
    }
    if (inputPassword !== null) {
      inputPassword !== ''
        ? setErrPassword('')
        : setErrPassword(errMessagePassword);
    }
  };

  const verifyInputUserId = useCallback(
    (inputId) => {
      handleInputErrorMessage(inputId, null);
      setId(inputId);
    },
    [id]
  );

  const verifyInputUserPassword = useCallback(
    (inputPassword) => {
      handleInputErrorMessage(null, inputPassword);
      setPassword(inputPassword);
    },
    [password]
  );

  const handleLoginToggle = useCallback(() => {
    if (id !== '' && password !== '') {
      const communicateServer = async () => {
        try {
          const { accessToken } = await requestLogin(id, password);
          const profile = await userProfile(accessToken);

          Alert.alert(null, '로그인이 완료되었습니다 :)');
          sendProfileToReduxStore(profile);
          navigation.navigate('Main');
        } catch (error) {
          Alert.alert(null, '아이디와 비밀번호가 정확하지 않습니다.');
          return console.log('로그인 에러 -> ', error);
        }
      };
      communicateServer();
    } else {
      handleInputErrorMessage(id, password);
      console.log(id, password, ' -> s실패');
    }
  }, [id, password]);

  return (
    <View style={styles.loginContainer}>
      <InputId errId={errId} verifyInputUserId={verifyInputUserId} />
      <InputPassword
        errPassword={errPassword}
        verifyInputUserPassword={verifyInputUserPassword}
      />
      <KeepLogined />
      <LoginButton handleLoginToggle={handleLoginToggle} />
      <SignUpButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: 'rgb(20, 21, 23)',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  space: {
    height: 5,
  },
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
  loginButton: {
    backgroundColor: 'red',
  },
  loginButtonTitle: {
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
});

export default Login;
