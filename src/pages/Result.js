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
  const [searchParams] = useSearchParams()
  const food = searchParams.get('food')
  const [foodResultD, setFoodResultD] = React.useState({})
  //let [결과이미지,set결과이미지] = useState('사진');
  //let [결과글,set결과글] = useState('글');

  
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
      <Title><h3>음식 추천 결과</h3></Title>
      <ResultImg>
        <img src={foodResultD.image} width={500} height={500} alt="결과 이미지" />
      </ResultImg>
      <Contents>
        밥오밥나무가 추천하는 오늘의 메뉴는 {foodResultD.food}입니다!
      </Contents>
      <Button variant="secondary" size="lg"><a href="/">다시하기</a></Button>
    </Container>
    /*
    <A1>
      <div id='myMap' style={{
            width: '500px', 
            height: '500px'
        }}></div>
      <div className='eat'>
        오늘 뭐 먹지?
      </div>
        <div className='picture'>
          <img src={foodResultData.}>
        </div>
        <div className='picture2'>
          <h3>{결과글}</h3>
        </div>
        <Button className='button1' variant="secondary" size="lg">
            <a href="/">다시하기</a>
        </Button>
    </A1>
    */
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
  width: 100%;
  height: 94%;
  background-color:#F1F8E0;
  position:absolute;
`
const Title = styled.div`
  font-size: 30pt;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ResultImg = styled.div`
  margin: 20px 20px;
`
const Contents = styled.div`
  font-size: 15pt;
  margin: 30p 30px;
`
/*
const MapGroup = styled.div`
  width: 500px;
  height: 500px;
`
*/