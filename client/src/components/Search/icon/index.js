import React from 'react';
import { Icon } from 'react-native-elements';
import { AntDesign } from 'react-native-vector-icons';

const SearchIcon = () => {
  return <Icon name='search' type='font-awesome' color='gray' />;
};

const BellsIcon = ({ size }) => {
  return <AntDesign name='bells' size={size} />;
};

const Search1Icon = ({ size }) => {
  return <AntDesign name='search1' size={size} />;
};

export { SearchIcon, BellsIcon, Search1Icon };
