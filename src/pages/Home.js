import React from 'react'
import bgimg from '../imgg/salad.jpg'
//import img2 from '../imgg/12.jpg'
import Button from '@mui/material/Button';
import styled from 'styled-components'
import { positions, width } from '@mui/system';
import { Container } from '../components/Styles/Container/Container_style';
import { Header, MainHeader, BGImage } from '../components/Styles/Header/Header_styled';
// import "./home.css";


export const Home = () => {
  return (
    <Container>
        <BGImage>
          <MainHeader>
            {/*
            <img src={bgimg} alt="배경이미지" resizeMode="stretch"></img>
            */}
          <h1>내면의 '내'가 결정하는 오늘의 메뉴를 추천 받으세요!<br></br>
            <button>추천받기시작</button>
          </h1>
          </MainHeader>
        </BGImage>
        {/*
      <div style={{positions:'reletive'}}>
      <img src={img1} alt="imgg/11.jpg" width='900' height='965' ></img>
      <img src={img2} alt="imgg/12.jpg" width='960' height='965' ></img>
      </div>
        */}
    </Container>
    
  );
}

export default Home
