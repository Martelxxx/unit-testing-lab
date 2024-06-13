import React, { useState } from 'react';
import './App.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
      if (inputValue.trim()) {
          setTodos([...todos, inputValue.trim()]);
          setInputValue('');
      }
  };

  return (
      <div>
          <h1>Todo List</h1>
          <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Add a new task"
          />
          <button onClick={addTodo}>Add</button>
          <ul>
              {todos.map((todo, index) => (
                  <li key={index}>{todo}</li>
              ))}
          </ul>
      </div>
  );
};

const App = () => {
  return (
      <div className="App">
          <header className="App-header">
              <Todo />
          </header>
      </div>
  );
};

export default App;
