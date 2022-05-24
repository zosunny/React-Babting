import React, { useState } from 'react'
import { border } from '@mui/system'
import styled from 'styled-components'
import { Badge} from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import { ClassNames } from '@emotion/react';
// import './Result.css'


const A1 = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  font-size: 20px;
  background-color:#F3F781;
  position:absolute;
`
const A2 = styled.div`
  width:1400px;
  height:800px;
  position:absolute;
  left:20%;
  top:1%;
  margin-left:-150px;
  margin-top:50px;
  background-color:#F1F8E0;
  border 3px solid #A9F5F2;
`
const A3 = styled.div`
  width: 500px;
  text-align:center;
  height: 50px;
  font-weight:bold;
  margin-left:430px;
  margin-top:-25px;
  border: 1px solid #A9F5F2;
  position:absolute;
  font-size: 20px;
  background-color:#F6CEF5;
`
const A4 = styled.div`
  position:absolute;
  margin-left:630px;
  margin-top:700px;
`
const A5 = styled.div`

`


function Result() {

  let [결과이미지,set결과이미지] = useState('사진');
  let [결과글,set결과글] = useState('글');

  return (
    <A1>
      <A2>
        <A3>
        <h2>
        <Badge bg="secondary">오늘 뭐 먹지?</Badge>
        </h2>
          </A3>
          <A5>
            <div className='picture'>
              <h3>{결과이미지}</h3>
            </div>
            <div className='picture'>
              <h3>{결과글}</h3>
            </div>
          </A5>
          <A4>
          <Button variant="secondary" size="lg">
            <a href="/">다시하기</a>
          </Button>
        </A4>
      </A2>
    </A1>
  )
}

export default Result