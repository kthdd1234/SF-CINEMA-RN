import React from 'react';
import { Icon } from 'react-native-elements';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const SearchIcon = () => {
  return <Icon name='search' type='font-awesome' color='gray' />;
};

const BellsIcon = ({ size }) => {
  return <AntDesignIcons name='bells' size={size} />;
};

const Search1Icon = ({ size }) => {
  return <AntDesignIcons name='search1' size={size} />;
};

export { SearchIcon, BellsIcon, Search1Icon };
