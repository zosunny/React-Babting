import React, { useState } from 'react';
import styled from 'styled-components'
import { ProgressBar,Button } from 'react-bootstrap';
import {qlist} from '../components/data/Qdata'


function Main() {
  const [questno,setquestno]= useState(0)
  
  const clickA = (no)=>{
    setquestno(questno+1);
  }
  const clickB = (no)=>{
    setquestno(questno+1);
  }
  return (
    <MAAA>
      <ProgressBar striped variant="danger" now={questno / qlist.length*100} 
      style={{marginTop:'30px',marginBottom:'10px'}}/>
      <Main1>{qlist[questno].q}여따 질문 넣기</Main1>
      <Picture>
        <Picture1 onClick={()=>{clickA(1)}}>{qlist[questno].imag}왼쪽 글 혹은 사진</Picture1>
        <Picture2 onClick={()=>{clickB(1)}}>{qlist[questno].b}오른쪽 글 혹은 사진</Picture2>
      </Picture>
      <Button1>
      <Button variant="success" >이전</Button>{''}
      <Button variant="success" style={{marginLeft:'5px'}}>다음</Button>{''}   
      </Button1>
    </MAAA>
  )
}

export default Main

const MAAA = styled.div`
  height:100vh;
  text-align:center;
`
  
const Main1 = styled.div`
  margin:50px
`
  
const Button1 = styled.div`
  
`
const Picture = styled.div`
  
`
const Picture1 = styled.div`
  
`
const Picture2 = styled.div`
  
`


  