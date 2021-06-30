import React from 'react';
import Item from './Item';

const RenderItem = ({ item }) => {
  const { value, method } = item;

  return <Item value={value} method={method} />;
};

export default RenderItem;
