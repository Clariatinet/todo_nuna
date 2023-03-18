import React, { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const handleButtonAddItem = () => {
    setTodoList([...todoList, inputValue]);
    setInputValue('');
  };
  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          handleButtonAddItem();
        }}
      >
        추가
      </button>
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;
