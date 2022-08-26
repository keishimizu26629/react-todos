import { useContext } from 'react'
import Todo from './Todo';
import { TodosContext } from './App';

function TodoList({ toggleCompleted }) {
  const todos = useContext(TodosContext);
  return todos.map((todo) => <Todo todo={ todo } key={ todo.id } toggleCompleted={ toggleCompleted } />);
};

export default TodoList;
