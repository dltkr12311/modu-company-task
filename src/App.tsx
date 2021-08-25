import { STATUS } from './utils/config';
import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/Header';
import TodoContainer from 'components/todos/TodoContainer';

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <ContainerWrapper>
        <TodoContainer initialStatus={STATUS.Todo} />
        <TodoContainer initialStatus={STATUS.InProgress} />
        <TodoContainer initialStatus={STATUS.Done} />
      </ContainerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ContainerWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 4px 30px;
  margin: 50px auto;
`;

export default App;
