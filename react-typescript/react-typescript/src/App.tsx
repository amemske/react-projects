import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputField from './components/InputField'
import { Todo } from './model';
import TodoList from './components/TodoList';




const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("") //something in the input
  const [todos, setTodos] =  useState<Todo[]>([]) //an array of an interface

  const handleAdd = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo("")
    }
  };
  console.log(todos)
  return (
    <div className="App">
      
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <div>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
      
      
    </div>
  );
}

export default App;
