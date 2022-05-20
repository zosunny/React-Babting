import React from 'react'
import img1 from '../imgg/11.jpg'
import img2 from '../imgg/12.jpg'
import Button from '@mui/material/Button';
import styled from 'styled-components'


function Home() {
  return (
    <Zzzzzz>
    <Img1>
      <img src={img1} alt="imgg/11.jpg"></img>
    </Img1>
    <Img2>
     <img src={img2} alt="imgg/12.jpg"></img>
    </Img2>
    </Zzzzzz>

  );
}

export default Home

const Img1 = styled.div`
  max-width: 100%;
  float: left;
  background-color:black
`
const Img2 = styled.div`
  max-width: 50%;
  float: right;
  background-color:blue
  
`
const Zzzzzz = styled.div`
  background-color:red
`
