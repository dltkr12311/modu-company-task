import React from 'react';
import styled from 'styled-components';

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <HeaderWrapper>Todo List</HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.h1`
  color: ${({ theme }) => theme.color.BLACK};

  padding: 16px;
  font-size: 1.5em;
  font-weight: 400;
  box-shadow: rgb(55 53 47 / 16%) 0px 1px 0px;
`;

export default Header;
