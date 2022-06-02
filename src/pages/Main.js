import React,{ useState, useEffect} from 'react'
import {ProgressBar,Button} from 'react-bootstrap';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import "./Main.css";

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


const Main = () => {
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  const [questno,setquestno] = useState(0);
  console.log('questno',questno)


  useEffect(() => {
    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);

  // const clickHandler = (food) => (d) => {
  //   onclick={event=>{
  //     event.preventDefault();
  //     props.onChangeMode(event.target.d.src.dec)
  //   }}
  // };
  return (
    <Ddd>
       <ProgressBar striped variant="danger" now={100} 
        style= {{ marginTop: '20px'}}/>
      <h1 className='title'>바오밥나무</h1>
      {displays.map((d) => {
        return (
          <div className='flex-1' key={d.name} >
            <img className='food-img' src={d.src} />
            <div className='food-name'>{d.name}</div>
            <div className='food-dec'>{d.dec}</div>
          </div>
        );
      })}
    </Ddd>
  );
};


export default Main

const Ddd = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`
