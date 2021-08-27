import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TodoTypes } from './TodoTypes';
import { Filter, CreateButton } from 'components';

interface TodoHeaderProps {
  status: string;
  setIsVisibleForm: Dispatch<SetStateAction<boolean>>;
  handleTodoSort: (status: string) => void;
  handleTodoCreator: (creators: TodoTypes[]) => void;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({
  status,
  setIsVisibleForm,
  handleTodoSort,
  handleTodoCreator,
}) => {
  const [dropOpen, setDropOpen] = useState<boolean>(false);
  const [selectCreator, setSelectCreator] = useState<any[]>([]);

  const onFilterOpenHandler = () => setDropOpen(!dropOpen);

  const onCreatorNameCheckedHandler = (checked: boolean, value: string) => {
    if (checked) {
      setSelectCreator([...selectCreator, value]);
    } else {
      setSelectCreator(selectCreator.filter((check) => check !== value));
    }
  };

  return (
    <Wrapper>
      <Title>{status}</Title>

      <CreateButton setIsVisibleForm={setIsVisibleForm} />
      <Filter
        status={status}
        dropOpen={dropOpen}
        filterOpen={onFilterOpenHandler}
        selectCreator={selectCreator}
        creatorChecked={onCreatorNameCheckedHandler}
        handleTodoSort={handleTodoSort}
        handleTodoCreator={handleTodoCreator}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  flex: 1;
`;

export default TodoHeader;
