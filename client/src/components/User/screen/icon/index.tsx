import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SettingIcon = ({ size }) => {
  return <AntDesign name='setting' size={size} color='whitesmoke' />;
};

const Like2Icon = ({ size }) => {
  return <AntDesign name='like2' size={size} color='srgb(48, 47, 47)' />;
};

const PlusCircleIcon = ({ size }) => {
  return <AntDesign name='pluscircleo' size={size} color='srgb(48, 47, 47)' />;
};

export { SettingIcon, Like2Icon, PlusCircleIcon };
