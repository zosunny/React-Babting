import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
//import Logo from '../imgg/logo2.png';

export const NavBarElements = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{fontFamily: 'CBNUJIKJI'}}>
  <Container>
  <Navbar.Brand href="/">바오밥나무</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/Main">추천받기</Nav.Link>
      <Nav.Link href="/ShowMap">지도보기</Nav.Link>
      <NavDropdown title="게시판" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">공지사항</NavDropdown.Item>
        {/*
        <NavDropdown.Item href="#action/3.2">1:1문의</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        */}
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">1:1문의</NavDropdown.Item>
        {/*}
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      */}
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/Join">회원가입</Nav.Link>
      <Nav.Link eventKey={2} href="/Login">로그인</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBarElements;