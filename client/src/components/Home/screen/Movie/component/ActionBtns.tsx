import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import {
  likeCompleted,
  saveCancel,
  saveCompleted,
  likeCancel,
} from '../request';
import {
  PlusIcon,
  LikeIcon,
  PlayIcon,
  DotsVerticalIcon,
  CheckIcon,
  LikeFillIcon,
} from '../icon';
import styled from 'styled-components/native';

interface IActionBtns {
  isLogin: boolean;
  movieId: number;
  profile: IProfile;
  setPlaying: Function;
  updateProfile: Function
}

interface IProfile {
  id: number;
  savedMovie: Array<any>;
  likedMovie: Array<any>;
}

const alertMessage = (message: string) => {
  return Alert.alert(
    null,
    message,
    [
      {
        text: '확인',
        style: 'destructive',
      },
    ],
    { cancelable: true }
  );
};

const ActionBtns = ({
  isLogin,
  movieId,
  profile,
  setPlaying,
  updateProfile,
}: IActionBtns) => {
  const [saveVisible, setSaveVisible] = useState(false);
  const [likeVisible, setLikeVisible] = useState(false);

  const {
    actionBtn,
    actionBtnFill,
    actionBtnOut,
    actionBtnTitle,
    settingBtn,
    settingContainer,
  }: any = styles;

  useEffect(() => {
    if (isLogin) {
      const { savedMovie, likedMovie } = profile;
      const data = [
        { movies: savedMovie, setVisible: setSaveVisible },
        { movies: likedMovie, setVisible: setLikeVisible },
      ];

      data.forEach(({ movies, setVisible }) => {
        movies.some(({ id: dataId }) => {
          if (dataId === movieId) {
            setVisible(true);
          }
        });
      });
    }
  }, []);

  const onPressSaveBtn = async () => {
    if (!isLogin) {
      alertMessage('로그인을 하여 해당 작품을 저장해보세요 :)');
    } else {
      const { id: userId } = profile;

      if (!saveVisible) {
        const data = await saveCompleted(userId, movieId);
        updateProfile(data);
      } else {
        const data = await saveCancel(userId, movieId);
        updateProfile(data);
      }
      setSaveVisible(!saveVisible);
    }
  };

  const onPressLikeBtn = async () => {
    if (!isLogin) {
      alertMessage('로그인을 하여 해당 작품에 대한 평가를 내려주세요 :)');
    } else {
      const { id: userId } = profile;

      if (!likeVisible) {
        const data = await likeCompleted(userId, movieId);
        updateProfile(data);
      } else {
        const data = await likeCancel(userId, movieId);
        updateProfile(data);
      }
      setLikeVisible(!likeVisible);
    }
  };

  const onPressTrailerBtn = () => setPlaying(true);
  const onPressSettingBtn = () => console.log('onPress Setting Btn!');

  const actionBtnList = [
    {
      icon: saveVisible ? <CheckIcon /> : <PlusIcon />,
      title: '저장하기',
      titleStyle: saveVisible ? actionBtnFill : actionBtnOut,
      onPress: onPressSaveBtn,
    },
    {
      icon: likeVisible ? <LikeFillIcon /> : <LikeIcon size={23} />,
      title: '재밌어요',
      titleStyle: likeVisible ? actionBtnFill : actionBtnOut,
      onPress: onPressLikeBtn,
    },
    {
      icon: <PlayIcon />,
      title: '예고편 보기',
      titleStyle: actionBtnTitle,
      onPress: onPressTrailerBtn,
    },
    {
      icon: <DotsVerticalIcon />,
      title: '',
      titleStyle: null,
      buttonStyle: settingBtn,
      onPress: onPressSettingBtn,
    },
  ];

  return (
    <StyledActionBtn>
      {actionBtnList.map(({ icon, title, titleStyle, onPress }, btnIdx) => (
        <Button
          key={btnIdx}
          icon={icon}
          title={title}
          titleStyle={titleStyle}
          buttonStyle={title ? actionBtn : settingBtn}
          containerStyle={!title ? settingContainer : null}
          onPress={onPress}
        />
      ))}
    </StyledActionBtn>
  );
};

const styles = StyleSheet.create({
  actionBtn: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(20, 21, 23)',
  },
  actionBtnTitle: {
    fontSize: 15,
  },
  actionBtnFill: {
    fontSize: 16,
    color: 'tomato',
  },
  actionBtnout: {
    fontSize: 15,
    color: 'whitesmoke',
  },
  settingBtn: {
    backgroundColor: 'transparent',
  },
  settingContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
});

const { View }: any = styled;

const StyledActionBtn = View`
  flex-direction: row;
  margin-top: 10px;
`;

export default ActionBtns;
