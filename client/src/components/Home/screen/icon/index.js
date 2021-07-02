import React from 'react';
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from 'react-native-vector-icons';

const PlusIcon = () => {
  return <AntDesign name='plus' size={23} color='whitesmoke' />;
};

const LikeIcon = ({ size }) => {
  return <AntDesign name='like2' size={size} color='whitesmoke' />;
};

const PlayIcon = () => {
  return <AntDesign name='playcircleo' size={23} color='whitesmoke' />;
};

const DotsVerticalIcon = () => {
  return <Entypo name='dots-three-vertical' size={23} color='whitesmoke' />;
};

const CheckIcon = () => {
  return <AntDesign name='check' size={23} color='tomato' />;
};

const LikeFillIcon = () => {
  return <AntDesign name='like1' size={23} color='tomato' />;
};

const Down = () => {
  return <AntDesign name='down' color='gray' />;
};

const Bulb1 = () => {
  return <AntDesign name='bulb1' color='whitesmoke' />;
};

const SlackIcon = () => {
  return <AntDesign name='slack' size={18} />;
};

const StarIcon = () => {
  return <AntDesign name='star' size={18} />;
};

const VideoIcon = () => {
  return <Entypo name='video' size={18} />;
};

const CrownIcon = () => {
  return <MaterialCommunityIcons name='crown' size={18} />;
};

const DingdingIcon = () => {
  return <AntDesign name='dingding' size={18} />;
};

const AlienIcon = () => {
  return <MaterialCommunityIcons name='alien' size={18} />;
};

const FlashIcon = () => {
  return <Entypo name='flash' size={18} />;
};

export {
  SlackIcon,
  StarIcon,
  VideoIcon,
  CrownIcon,
  DingdingIcon,
  AlienIcon,
  FlashIcon,
  PlusIcon,
  LikeIcon,
  PlayIcon,
  DotsVerticalIcon,
  CheckIcon,
  LikeFillIcon,
  Down,
  Bulb1,
};
