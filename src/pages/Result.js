import React, { useState,useEffect  } from 'react'
import { border } from '@mui/system'
import styled from 'styled-components'
import { Badge} from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import { ClassNames } from '@emotion/react';
import "./Result.css";


const A1 = styled.div`
  width: 100%;
  height: 94%;
  background-color:#F1F8E0;
  position:absolute;
`
const { kakao } = window;


function Result() {

  let [결과이미지,set결과이미지] = useState('사진');
  let [결과글,set결과글] = useState('글');

  useEffect(() => {
    const container = document.getElementById('myMap');
const options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3
};
    const map = new kakao.maps.Map(container, options);
}, []);
  return (
    
    <A1>
      <div id='myMap' style={{
            width: '500px', 
            height: '500px'
        }}></div>
      <div className='eat'>
        오늘 뭐 먹지?
      </div>
        <div className='picture'>
          <h3>{결과이미지}</h3>
        </div>
        <div className='picture2'>
          <h3>{결과글}</h3>
        </div>
        <Button className='button1' variant="secondary" size="lg">
            <a href="/">다시하기</a>
        </Button>
    </A1>
  )
}

export default Result;