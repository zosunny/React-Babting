import React from 'react'
import bgimg from '../imgg/salad.jpg'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate('/main')
  }
  return (
    <Container>
      <Contents>
        <BGImg />
        <Title>
          <p>밥오밥나무가 추천하는 오늘의 메뉴를 알고싶으신가요?</p>
          <Button variant="outline-warning" style={{}} onClick={handleClickButton}>추천받기</Button>
        </Title>
      </Contents>
    </Container>

  );
}

export default Home

const Container = styled.div`
  width: 100%;
  height: calc(100% - 56px);
`
const Contents = styled.div`
  height:100%;
`
const Title = styled.div`
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  font-size: 20pt;
  color:#fff;
  text-align:center;
`
const BGImg = styled.div`
  width:100%;
  height:100%;
  background:url('../imgg/salad.jpg');
  background-size:cover;
  margin: 0 0 0 0;
`
