import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { InputField, KeepLogined, Btn } from './component';
import { reqLogin } from './request';
import { reqProfile } from '../../User/screen/request';
import { UserIcon, LockIcon } from './icon';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

interface ILogin {
  dispatchIsLogin: Function;
  dispatchProfile: Function;
}

const Login = ({ dispatchIsLogin, dispatchProfile }: ILogin) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errId, setErrId] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const { navigate } = useNavigation();

  const handleInputErrorMessage = (inputId: string, inputPassword: string) => {
    if (inputId !== null) {
      inputId !== '' ? setErrId('') : setErrId('아이디를 입력해주세요.');
    }
    if (inputPassword !== null) {
      inputPassword !== ''
        ? setErrPassword('')
        : setErrPassword('비밀번호를 입력해주세요.');
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
          const { accessToken } = await reqLogin(id, password);
          const profile = await reqProfile(accessToken);

          Alert.alert(null, '로그인이 완료되었습니다 :)');
          dispatchIsLogin(true);
          dispatchProfile(profile);
          navigate('Main');
        } catch (error) {
          Alert.alert(null, '아이디와 비밀번호가 정확하지 않습니다.');
          return console.log('로그인 에러 -> ', error);
        }
      };
      communicateServer();
    } else {
      handleInputErrorMessage(id, password);
      console.log(id, password, ' -> 실패');
    }
  }, [id, password]);

  return (
    <StyledLogin>
      <InputField
        label='아이디'
        placeholder='아이디를 입력해주세요.'
        autoFocus={true}
        leftIcon={UserIcon}
        secureTextEntry={false}
        onChangeText={verifyInputUserId}
        errorMessage={errId}
      />
      <InputField
        label='비밀번호'
        placeholder='비밀번호를 입력해주세요.'
        autoFocus={false}
        leftIcon={LockIcon}
        secureTextEntry={true}
        onChangeText={verifyInputUserPassword}
        errorMessage={errPassword}
      />
      <KeepLogined />
      <Btn title='로그인 하기' onPress={handleLoginToggle} />
      <Btn title='회원가입 하기' onPress={() => navigate('SignUp')} />
    </StyledLogin>
  );
};

const { View }: any = styled;

const StyledLogin = View`
  flex: 1;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgb(20, 21, 23);
`;

export default Login;
