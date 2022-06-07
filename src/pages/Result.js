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

const { kakao } = window;

const Result = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const food = searchParams.get('food')
  const [foodResultD, setFoodResultD] = React.useState({})

  
  React.useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
  }, []);
  
  React.useEffect(() => {
    const result = ResultData.find((e) => e.combi === food)
    setFoodResultD(result)
  }, [food])
  console.log(foodResultD)
  return (
    <Container>
      <Title>음식 추천 결과</Title>
      <ResultImg>
        <img src={foodResultD.image} width={400} height={300} alt="결과 이미지" />
      </ResultImg>
      <Contents>
        밥오밥나무가 추천하는 오늘의 메뉴는 {foodResultD.food}입니다!
      </Contents>
      <Map>
       <div id='myMap' style={{
            width: '300px', 
            height: '300px'
        }}></div>
        
      </Map>
      <Button variant="secondary" size="lg"><a href="/">다시하기</a></Button>
  
    </Container>
  )
}

export default Result;

const Container = styled.div`
  width: 100%;
  height: 94%;
  background-color:#F1F8E0;
`
const Title = styled.div`
  font-size: 30pt;
  display: flex;
  justify-content: center;
`
const ResultImg = styled.div`
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
/*
const MapGroup = styled.div`
  width: 500px;
  height: 500px;
`
*/