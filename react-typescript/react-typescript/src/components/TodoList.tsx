import React from 'react'
import { Todo } from '../model'
import SingleTaskComponent from './SingleTaskComponent'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList ({todos, setTodos}: Props ) {
  return (
    <div>
      {todos.map(todo => <div><SingleTaskComponent todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/></div>)}
    </div>
  )
}

export default TodoList