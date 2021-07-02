import React from 'react';
import styled from 'styled-components/native';

const ListTitle = ({ icon, listTitle }) => {
  return (
    <StyledListTitle>
      {icon} {listTitle}
    </StyledListTitle>
  );
};

const StyledListTitle = styled.Text`
  margin-bottom: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export default ListTitle;
