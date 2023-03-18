import React from 'react';
import styled from 'styled-components';

const TodoList = ({ todoList }) => {
  return (
    <div>
      <h1>TodoList</h1>
      {todoList.map((item) => {
        return (
          <StyledTodoItemDiv>
            <h3>{item}</h3>
            <button>삭제</button>
          </StyledTodoItemDiv>
        );
      })}
    </div>
  );
};

export default TodoList;

const StyledTodoItemDiv = styled.div`
  padding: 1rem;
  width: 10rem;
  border: 1px solid black;
  margin-bottom: 2rem;
`;
