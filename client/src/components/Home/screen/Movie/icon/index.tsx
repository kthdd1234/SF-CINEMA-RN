import React from 'react';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const PlusIcon = () => {
  return <AntDesignIcons name='plus' size={23} color='whitesmoke' />;
};

const LikeIcon = ({ size }) => {
  return <AntDesignIcons name='like2' size={size} color='whitesmoke' />;
};

const PlayIcon = () => {
  return <AntDesignIcons name='playcircleo' size={23} color='whitesmoke' />;
};

const DotsVerticalIcon = () => {
  return <EntypoIcons name='dots-three-vertical' size={23} color='whitesmoke' />;
};

const CheckIcon = () => {
  return <AntDesignIcons name='check' size={23} color='tomato' />;
};

const LikeFillIcon = () => {
  return <AntDesignIcons name='like1' size={23} color='tomato' />;
};

const Down = () => {
  return <AntDesignIcons name='down' color='gray' />;
};

const Bulb1 = () => {
  return <AntDesignIcons name='bulb1' color='whitesmoke' />;
};

export {
  PlusIcon,
  LikeIcon,
  PlayIcon,
  DotsVerticalIcon,
  CheckIcon,
  LikeFillIcon,
  Down,
  Bulb1,
};
