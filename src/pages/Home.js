import React from 'react'
import bgimg from '../imgg/pasta.jpg'
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
      <BGImgContainer>
        <img src={bgimg} resizeMode="stretch" alt="홈이미지" />
        <Header>
          <Title>밥오밥나무가 추천하는 오늘의 메뉴를 알고싶으신가요?</Title>
          <Button variant="outline-success" style={{}} onClick={handleClickButton}>추천받기</Button>
        </Header>
      </BGImgContainer>
    </Container>
    
  );
}

export default Home

const Container = styled.div`
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
const BGImgContainer = styled.ImageBackground`
  width: auto;
  height: auto;
  //object-fit: cover;    //웹일때
`