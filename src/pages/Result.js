//import React, { useState,useEffect  } from 'react'
import React from 'react'
//import { border } from '@mui/system'
import styled from 'styled-components'
//import { Badge} from 'react-bootstrap';
//import { Button} from 'react-bootstrap';
//import { ClassNames } from '@emotion/react';
import Button from 'react-bootstrap/Button'
import {ResultData} from '../data/foodResultD'
import {useNavigate, useSearchParams} from 'react-router-dom'
import "./Result.css";

//const { kakao } = window;

const Result = () => {
  const navigate = useNavigate()
  const handleClickButton1 = () => {
    navigate('/main')
  }
  const handleClickButton2 = () => {
    navigate('/showmap')
  }
  const [searchParams] = useSearchParams()
  const food = searchParams.get('food')
  const [foodResultD, setFoodResultD] = React.useState({})
  
  React.useEffect(() => {
    const result = ResultData.find((e) => e.combi === food)
    setFoodResultD(result)
  }, [food])
  console.log(foodResultD)
  return (
    <Container>
      <Title>음식 추천 결과</Title>
      <ResultImg>
        <img src={foodResultD.image} width={450} height={450} alt="결과 이미지" />
      </ResultImg>
      <Contents>
        밥팅이 추천하는 오늘의 메뉴는 "{foodResultD.food}"입니다!
      </Contents>
      <Map>
       <div id='myMap' style={{
            width: '300px', 
            height: '300px'
        }}></div>
        
      </Map>
      
      <ButtonGroup>
        <Button variant="outline-success" style={{margin:'20px'}} onClick={handleClickButton1}>다시하기</Button>
        <Button variant="outline-success" style={{margin:'20px'}} onClick={handleClickButton2}>지도보기</Button>
      </ButtonGroup>
    </Container>
  )
}

export default Result;



const Container = styled.div`
  font-family: 'CBNUJIKJI';
  width: 100%;
  height: 94%;
  background-color:#F1F8E0;
`
const Title = styled.div`
  font-size: 30pt;
  display: flex;
  margin: 20px auto;
  justify-content: center;
`
const ResultImg = styled.div`
<<<<<<< HEAD
  margin: 20px 20px;
  display: flex;
  justify-content: center;
`
const Contents = styled.div`
  font-size: 15pt;
  margin: 30p 30px;
  display: flex;
  justify-content: center;
`
const Map = styled.div`
  font-size: 15pt;
  margin: 30p 30px;
  display: flex;
  justify-content: center;
`

const ButtonGroup = styled.div`
  position:absolute;
  justify-content: center;
  align-items: center;
  transform: translate(-50%,-50%);
  top: 90%;
  left: 50%;
`