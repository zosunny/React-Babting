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

  
  // React.useEffect(() => {
  //   const container = document.getElementById('myMap');
  //   const options = {
  //     center: new kakao.maps.LatLng(33.450701, 126.570667),
  //     level: 3
  //   };
  //   const map = new kakao.maps.Map(container, options);
  // }, []);
  
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
        밥오밥나무가 추천하는 오늘의 메뉴는 {foodResultD.food}입니다!
      </Contents>
       {/* <div id='myMap' style={{
            width: '500px', 
            height: '500px',
            left: '50%',
            right: '50%'
        }}></div> */}
      <ButtonGroup>
        <Button variant="outline-success" style={{margin:'20px'}} onClick={handleClickButton1}>다시하기</Button>
        <Button variant="outline-success" style={{margin:'20px'}} onClick={handleClickButton2}>지도보기</Button>
      </ButtonGroup>
    </Container>

  )
}

export default Result;

/*
const A1 = styled.div`
  width: 100%;
  height: 94%;
  background-color:#F1F8E0;
  position:absolute;
`
*/

const Container = styled.div`
  font-family: 'CBNUJIKJI';
  width: 100%;
  height: 94%;
  background-color:#F1F8E0;
  position:absolute;
`
const Title = styled.div`
  font-size: 30pt;
  display: flex;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
`
const ResultImg = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  margin: 20px auto;
  padding: 25px;
  align-items: center;
  border: 1px solid gray;
  background-color: #FFFFFF;
  border-radius: 5px;
`
const Contents = styled.div`
  width: 500px;
  font-size: 15pt;
  display: flex;
  position:absolute;
  justify-content: center;
  align-items: center;
  transform: translate(-50%,-50%);
  left: 50%;
`
const ButtonGroup = styled.div`
  position:absolute;
  justify-content: center;
  align-items: center;
  transform: translate(-50%,-50%);
  top: 90%;
  left: 50%;
`
/*
const MapGroup = styled.div`
  width: 500px;
  height: 500px;
`
*/