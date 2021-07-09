import React from 'react';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SlackIcon = () => {
  return <AntDesignIcons name='slack' size={18} />;
};

const StarIcon = () => {
  return <AntDesignIcons name='star' size={18} />;
};

const VideoIcon = () => {
  return <EntypoIcons name='video' size={18} />;
};

const CrownIcon = () => {
  return <MaterialCommunityIcons name='crown' size={18} />;
};

const DingdingIcon = () => {
  return <AntDesignIcons name='dingding' size={18} />;
};

const AlienIcon = () => {
  return <MaterialCommunityIcons name='alien' size={18} />;
};

const FlashIcon = () => {
  return <EntypoIcons name='flash' size={18} />;
};

export {
  SlackIcon,
  StarIcon,
  VideoIcon,
  CrownIcon,
  DingdingIcon,
  AlienIcon,
  FlashIcon,
};
