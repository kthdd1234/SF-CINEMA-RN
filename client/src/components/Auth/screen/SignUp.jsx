import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { Btn, InputField } from './component';
import { requestSignUp } from '../../../requests';
import { UserIcon, LockIcon, UnlockIcon } from './icon';
import styled from 'styled-components/native';

function SignUp({ navigation }) {
  const [newId, setNewId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errNewId, setErrId] = useState('');
  const [errNewPassword, setErrPassword] = useState('');
  const [errConfirmPassword, setErrConfirmPassword] = useState('');

  const handleInputErrorMessage = (
    inputId,
    inputPassword,
    inputConfirmPassword
  ) => {
    if (inputId !== null) {
      inputId !== '' ? setErrId('') : setErrId('아이디를 입력해주세요.');
    }
    if (inputPassword !== null) {
      inputPassword !== ''
        ? setErrPassword('')
        : setErrPassword('비밀번호를 입력해주세요.');
    }
    if (inputConfirmPassword !== null) {
      inputConfirmPassword !== ''
        ? setErrConfirmPassword('')
        : setErrConfirmPassword('비밀번호를 한번 더 입력해주세요.');
    }
  };

  const verifyMatchConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setErrConfirmPassword('비밀번호가 일치 하지 않습니다.');
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
          : setErrConfirmPassword('비밀번호가 일치 하지 않습니다.');
      } else {
        return setErrConfirmPassword('비밀번호를 한번 더 입력해주세요.');
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

  const inputData = [
    {
      label: '신규 가입 아이디',
      placeholder: '아이디를 입력해주세요.',
      autoFocus: true,
      leftIcon: UserIcon,
      secureTextEntry: false,
      onChangeText: verifyInputNewUserId,
      errorMessage: errNewId,
    },
    {
      label: '비밀번호',
      placeholder: '비밀번호를 입력해주세요.',
      autoFocus: false,
      leftIcon: UnlockIcon,
      secureTextEntry: true,
      onChangeText: verifyInputNewUserPassword,
      errorMessage: errNewPassword,
    },
    {
      label: '비밀번호 확인',
      placeholder: '비밀번호를 한번 더 입력해주세요.',
      autoFocus: false,
      leftIcon: LockIcon,
      secureTextEntry: true,
      onChangeText: verifyInputConfirmPassword,
      errorMessage: errConfirmPassword,
    },
  ];

  return (
    <StyledSignUp>
      {inputData.map(
        (
          {
            label,
            placeholder,
            autoFocus,
            leftIcon,
            secureTextEntry,
            onChangeText,
            errorMessage,
          },
          dataIdx
        ) => (
          <InputField
            key={dataIdx}
            label={label}
            placeholder={placeholder}
            autoFocus={autoFocus}
            leftIcon={leftIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            errorMessage={errorMessage}
          />
        )
      )}
      <Btn title='회원가입 하기' onPress={hadleSignUpToggle} />
    </StyledSignUp>
  );
}

const StyledSignUp = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgb(20, 21, 23);
`;

export default SignUp;
