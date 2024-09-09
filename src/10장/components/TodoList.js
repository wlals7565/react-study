import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {
  return (
    <div className='TodoList'>
      { todos && todos.length> 0 ? todos.map((todo) => <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>) : null }
    </div>
  )
}

export default TodoList;