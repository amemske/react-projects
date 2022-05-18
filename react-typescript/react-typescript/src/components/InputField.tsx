import React from 'react'

import {Container, Row, Col, Form, Button} from 'react-bootstrap';

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent<EventTarget>)=> void
}

function InputField({todo, setTodo, handleAdd}: Props) {
  return (
    <Container>
  <Row>
    <Col>
        <div className="heading h2">taskify</div>
        <Form onSubmit={(e) => handleAdd(e)}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
    </Col>
   
    
  </Row>
</Container>
  )
}

export default InputField