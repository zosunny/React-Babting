import React from 'react'
import { Form } from 'react-bootstrap';
import styled from 'styled-components'
import { Button } from 'react-bootstrap';

export const Join = () => {
  return (
  <Container>
    <Contents>  
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>User id</Form.Label>
          <Form.Control type="text" placeholder="User id" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control type="text" placeholder="User name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control type="password" placeholder="Password confirm" />
        </Form.Group>
        <Button variant="outline-success" style={{width:'300px', marginTop:'20px', marginLeft:'22.5px'}}>Sign up</Button>
      </Form>
    </Contents>
  </Container>
  )
}

export default Join;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  position: relative;
  overflow-y: hidden;
  background-color: #F7F9F9;
`

const Contents = styled.div`
  width: 400px;
  height: 580px;
  border: 2px solid lightgray;
  border-radius:7px;
  background-color: #FFFFFF;
  margin: 75px auto 0;
  padding: 25px;
  
`