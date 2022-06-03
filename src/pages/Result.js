import React, { useState,useEffect  } from 'react'
import styled from 'styled-components'
import { Button} from 'react-bootstrap';
import { ClassNames } from '@emotion/react';
import "./Result.css";
import { ResultData  } from '../data/foodResultD'
import { useNavigate,useSearchParams } from 'react-router-dom'

const A1 = styled.div`
  width: 100%;
  height: 94%;
  background-color:#F1F8E0;
  position:absolute;
`
const { kakao } = window;


function Result() { 

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
    };
        const map = new kakao.maps.Map(container, options);
    } , []);

    const a =  ((foodResultD)=>{return foodResultD})
    console.log(a)
    
  return ( 
    <A1>
      <div id='myMap' style={{
          width: '500px', 
          height: '500px'}}>
      </div>
      <div className='eat'>
        오늘 뭐 먹지?
      </div>
        <div className='picture'>
          <h3>zz</h3>
        </div>
        <div className='picture2'>
          <h3>desc</h3>
        </div>
        <Button className='button1' variant="secondary" size="lg">
            <a href="/">다시하기</a>
        </Button>
    </A1>
  )
}

export default Result;