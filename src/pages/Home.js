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
      <Header>
        <BGImg>
          <img src={bgimg} alt="홈이미지" />
        </BGImg>
        <Title>밥오밥나무가 추천하는 오늘의 메뉴를 알고싶으신가요?</Title>
        <Button variant="outline-warning" style={{}} onClick={handleClickButton}>추천받기</Button>
      </Header>
    </Container>
    
  );
}

export default Home

const Container = styled.imagebackground`
  width: 100%;
  height: 100%;
`
const Header = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`
const Title = styled.div`
  font-size: 20pt;
`
const BGImg = styled.div`

  margin: 0 0 0 0
`