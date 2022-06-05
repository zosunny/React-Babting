import { textAlign } from '@mui/system';
import React from 'react'
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const Login = () => {
  return (
    <Container>
    <Contents>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>User id</Form.Label>
          <Form.Control type="text" placeholder="User id" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="outline-success" style={{width:'300px', marginTop:'20px', marginLeft:'22.5px'}}>Log in</Button>
      </Form>
    </Contents>
  </Container>
  )
}
export default Login;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  position: relative;
  overflow-y: hidden;
  background-color: #F7F9F9;
`

const Contents = styled.div`
  width: 400px;
  height: 300px;
  border: 2px solid lightgray;
  border-radius:7px;
  background-color: #FFFFFF;
  margin: 200px auto 0;
  padding: 25px;
  
`