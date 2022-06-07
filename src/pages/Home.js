import React from 'react'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
//import "./Home.css";

export const Home = () => {
  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate('/main')
  }
  return (
    <Container>
      <Contents>
        <Title>
          <p>밥팅이 추천하는 <br/><span style={{color:'#6FBA7B'}}>오늘의 메뉴</span>를 알고싶으신가요?</p>
          <Button variant="success" onClick={handleClickButton}>추천받기</Button>
        </Title>
      </Contents>
    </Container>

  );
}

export default Home

const Container = styled.div`
  font-family: 'CBNUJIKJI';
  width: 100%;
  height: calc(100% - 56px);
  position: relative;
  z-index: 1;
  background:url('../imgg/salad.jpg');
  background-size:cover;
   &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.5;
  }
`
const Contents = styled.div`
  height:100%;
`
const Title = styled.div`
  position:absolute;
  left:28%;
  top:50%;
  transform: translate(-50%,-50%);
  font-size: 35pt;
  color:#fff;
  //text-align:center;
  white-space: pre-line;
`