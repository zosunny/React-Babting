//import React,{ useState, useEffect} from 'react'
import React from 'react'
import {ProgressBar,Button} from 'react-bootstrap';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import "./Main.css";
import { FoodQuestionD } from '../data/foodQuestionD'
import { createSearchParams} from 'react-router-dom'
import { fontSize } from '@mui/system';

const choice_list = [
  {id: "A1A2", score: 0},       //spicy [A1: spicy, A2: non-spicy]
  {id: "B1B2", score: 0},       //temperature [B1: hot, B2: cold]
  {id: "C1C2", score: 0},       //soup [C1: soup, C2: non-soup]
  //{id: "D1D2", score: 0},       //fast-food [D1: fast-food, D2: slow-food]
  {id: "D1D2", score: 0}        //price [E1: expensive, E2: cheap]
]


const Main = () => {
  const [questionNo, setQuestionNo] = React.useState(0)
  const [totalScore, setTotalScore] = React.useState(choice_list)
 
  const navigate = useNavigate()
  console.log('totalScore', totalScore)
  //
  const clickHandler = (num, type) => {
    const newScore = totalScore.map((e) => 
      e.id === type ? {id: e.id, score: e.score + num} : e     //각 해당 질문에서 +num해줌
    )
    setTotalScore(newScore)
    //마지막페이지가 아니면 다음 문제로 수 증가
    if (FoodQuestionD.length != questionNo + 1) {
      setQuestionNo(questionNo + 1)
    //마지막페이지면 결론 출력해야 됨
    }else{
      //각 해당 질문에서 score가 2이상이면 n1/n2 중 n1을 선택 아니면 n2 선택 
      const food = newScore.reduce(
        (acc, now) => acc + (now.score >= 2 ? now.id.substring(0,2) : now.id.substring(2,4)), ""
      )
      console.log("food" + food)
      //결과 페이지 이동
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          food: food
        })}`
      })
    }
  };
  return (
    <Container>
       <ProgressBar striped variant="danger" now={(questionNo / FoodQuestionD.length)} style= {{ marginTop: '50px'}}/>
        <Title>{FoodQuestionD[questionNo].title}</Title>
        <ImgButtonGroup>
          <Button className='leftbutton' variant="warning" onClick={() => clickHandler(1, FoodQuestionD[questionNo].type)}>
            <img src={FoodQuestionD[questionNo].foodImg1} style={{width:'500px', height:'400px', padding: '10px'}}></img><p style={{fontSize:'20px'}}>{FoodQuestionD[questionNo].answer1}</p></Button>
          <Button className='rightbutton' variant="info" onClick={() => clickHandler(0, FoodQuestionD[questionNo].type)}>
            <img src={FoodQuestionD[questionNo].foodImg2} style={{width:'500px', height:'400px', padding: '10px'}}></img><p style={{fontSize:'20px'}}>{FoodQuestionD[questionNo].answer2}</p></Button>
        </ImgButtonGroup>
    </Container>
  );
};


export default Main

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`

const Title = styled.div`
  font-size: 25pt;
  display: flex;
  height: 90px;
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
`

const ImgButtonGroup = styled.div`
  display: flex;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  //align-items:center;
  //justify-content: center;
  /* &::hover{
    //content: "";
    border: 2px solid gray;
  } */
`
