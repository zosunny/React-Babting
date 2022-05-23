import React from 'react'
import img1 from '../imgg/11.jpg'
import img2 from '../imgg/12.jpg'
import Button from '@mui/material/Button';
import styled from 'styled-components'
import { positions, width } from '@mui/system';
// import "./home.css";


function Home() {
  return (
    <Zzzzzz>
      <div style={{positions:'reletive'}}>
      <button >시작</button>
      <img src={img1} alt="imgg/11.jpg" width='900' height='965' ></img>
      <img src={img2} alt="imgg/12.jpg" width='960' height='965' ></img>
      </div>
    </Zzzzzz>
    
  );
}

export default Home

const Img1 = styled.div`
 
`
const Img2 = styled.div`

  
`
const Zzzzzz = styled.div`
  background-color:black;
  
`
