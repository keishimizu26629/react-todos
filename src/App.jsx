import { useState, useRef, createContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import './App.css';

export const TodosContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if(name != '') {
      setTodos((prevTodos) => {
        return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
      });
      todoNameRef.current.value = null;
    }
  }

  const toggleCompleted = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id == id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <>
      <input type="text" ref={ todoNameRef } />
      <button onClick={ handleAddTodo }>タスクを追加</button>
      <button onClick={ handleClear }>完了したタスクの削除</button>
      <TodosContext.Provider value={ todos } >
        <TodoList toggleCompleted={ toggleCompleted }/>
      </TodosContext.Provider>
      <div>残りのタスク: { todos.filter((todo) => !todo.completed).length }</div>
    </>
  )
}

export default App
