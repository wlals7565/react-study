import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import React, { useCallback } from "react";
import { List } from "react-virtualized";

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos]
  );

  return (
    <List
     className="TodoList"
     width={512}
     height={513}
     rowCount={todos.length}
     rowHeight={57}
     rowRenderer={rowRenderer}
     list={todos}
     style={{outline: 'none'}}
     />
  );
  /*
  return (
    <div className='TodoList'>
      { todos && todos.length> 0 ? todos.map((todo) => <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>) : null }
    </div>
  )
  */
};

export default React.memo(TodoList);
