import React from 'react';
import styled from 'styled-components/native';

const Empty = ({ icon, value }) => {
  return (
    <StyledEmpty>
      {icon}
      <EmptyValue>{value}</EmptyValue>
    </StyledEmpty>
  );
};

const StyledEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const EmptyValue = styled.Text`
  margin-top: 15px;
  font-size: 18px;
  color: srgb(48, 47, 47);
`;

export default Empty;
