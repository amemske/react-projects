import React from 'react'
import { Todo } from '../model'
import {Card, Row, Col, Form, Button} from 'react-bootstrap';
import { AiFillEdit, AiFillDelete, AiFillCheckSquare  } from 'react-icons/ai'

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



const SingleTaskComponent = ({todo, todos, setTodos}: Props) => {
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone}: todo)
        )
    }
  return (
    <div>
        <Card>
            <Card.Body>
                <Form>
                    <Row>
                        <Col>
                        {todo.isDone ? (<s>{todo.todo}</s>): (<span>{todo.todo}</span>)}
                        
                        </Col>
                        <Col><span><AiFillEdit/></span></Col>
                        <Col><span><AiFillDelete/></span></Col>
                        <Col><span onClick={()=> handleDone(todo.id)}><AiFillCheckSquare /></span></Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleTaskComponent