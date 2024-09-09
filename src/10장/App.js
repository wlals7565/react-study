import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import './index.css';
import React, { useState, useRef, useCallback } from 'react';
import data from './data';

const App10 = () => {
  const [todos, setTodos] = useState(data);

  const nextId = useRef(todos.length+1);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  )
  const onRemove = useCallback( (id) => {
    setTodos(todos.filter(todo=> todo.id !== id))
  }, [todos])

  const onToggle = useCallback( (id) => {
    setTodos(
      todos.map( todo => todo.id === id ? {...todo, checked: !todo.checked}: todo)
    )
  }, [todos])
  return (<TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
  </TodoTemplate>)
}

export default App10;