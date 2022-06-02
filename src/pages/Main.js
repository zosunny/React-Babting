//import React,{ useState, useEffect} from 'react'
import React from 'react'
import {ProgressBar,Button} from 'react-bootstrap';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import "./Main.css";
import { FoodQuestionD } from '../data/foodQuestionD'
import { createSearchParams} from 'react-router-dom'

/*
const items = [
  {
    name:'파스타',
    src:require('../imgg/pasta.jpg'),
    dec:'매운거땡긴다',
  },
  {
    name:'초밥',
    src:require('../imgg/21.jpg'),
    dec:'초밥떙김ddddd'
  },
  {
    name:'매운맛',
    src:require('../imgg/매운사진.png'),
    dec:'asdfazzzzzsf'
  },
  {
    name:'달달한',
    src:require('../imgg/달콤.webp'),
    dec:'hhhhhhhhhhhh'
  },
]
*/

const choice_list = [
  {id: "A1A2", score: 0},       //spicy [A1: spicy, A2: non-spicy]
  {id: "B1B2", score: 0},       //temperature [B1: hot, B2: cold]
  {id: "C1C2", score: 0},       //soup [C1: soup, C2: non-soup]
  {id: "D1D2", score: 0},       //fast-food [D1: fast-food, D2: slow-food]
  {id: "E1E2", score: 0},       //price [E1: expensive, E2: cheap]
]

const Main = () => {
  const [questionNo, setQuestionNo] = React.useState(0)
  const [totalScore, setTotalScore] = React.useState(choice_list)
  //const [foods, setFoods] = useState([]);
  //const [displays, setDisplays] = useState([]);
  //const [winners, setWinners] = useState([]);
  //const [questno,setquestno] = useState(0);
  //console.log('questno',questno)


  //useEffect(() => {
  //  setFoods(items);
  //  setDisplays([items[0], items[1]]);
  //}, []);
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
      //각 해당 질문에서 score가 1이상이면 n1/n2 중 n1을 선택 아니면 n2 선택 
      const food = newScore.reduce(
        (acc, now) => acc + (now.score >= 2 ? now.id.substring(0,2) : now.id.substring(2,4)), ""
      )
      //const acc_food = newScore.map((e2) =>
      //  e2.id === type && e2.score >= 1 ? {id: e2.id.substring(0,2)} : {id: e2.id.substring(2,4)}
      //)
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
       <ProgressBar striped variant="danger" now={(questionNo / FoodQuestionD.length)} style= {{ marginTop: '20px'}}/>
        <Title>{FoodQuestionD[questionNo].title}</Title>
        <ImgButtonGroup>
          <Button variant="outline-success" onClick={clickHandler(1, FoodQuestionD[questionNo].type)}>
            <img src='' style={{width:'25px', height:'50px'}}></img><p>{FoodQuestionD[questionNo].answera}</p>1선택</Button>
          <Button variant="outline-success" onClick={clickHandler(0, FoodQuestionD[questionNo].type)}>
            <img src='' style={{width:'125px', height:'50px'}}></img><p>{FoodQuestionD[questionNo].answerb}</p>2선택</Button>
        </ImgButtonGroup>
      
      {/*
      {displays.map((d) => {
        return (
          <div className='flex-1' key={d.name} onClick={clickHandler(d)}>
            <img className='food-img' src={d.src} />
            <div className='food-name'>{d.name}</div>
            <div className='food-dec'>{d.dec}</div>
          </div>
        );
      })}
      */}
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
  margin: 50px 0;
`

const ImgButtonGroup = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
`