import React from 'react';
import styled from 'styled-components/native';

interface IEmpty {
  icon: any;
  value: string;
}

const Empty = ({ icon, value }: IEmpty) => {
  return (
    <StyledEmpty>
      {icon}
      <EmptyValue>{value}</EmptyValue>
    </StyledEmpty>
  );
};

const { View, Text }: any = styled;

const StyledEmpty = View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const EmptyValue = Text`
  margin-top: 15px;
  font-size: 18px;
  color: srgb(48, 47, 47);
`;

export default Empty;
