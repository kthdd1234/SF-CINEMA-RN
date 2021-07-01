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
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export default ListTitle;
