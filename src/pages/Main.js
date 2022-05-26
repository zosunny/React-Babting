import React from 'react';
import styled from 'styled-components'
import { ProgressBar,Button } from 'react-bootstrap';
import {qlist} from '../components/data/Qdata'

function Main() {
  
  
  return (
    <MAAA>
      <ProgressBar striped variant="danger" now={100} 
      style={{marginTop:'30px',marginBottom:'10px'}}/>
      <Main1>{qlist[0].q}여따 질문 넣기</Main1>
      <Picture>
        <Picture1>{qlist[0].a}여기 글 사진 왼쪽</Picture1>
        <Picture2>{qlist[0].b}여기 글 사진</Picture2>
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
  
`
  
const Button1 = styled.div`
  
`
const Picture = styled.div`
  
`
const Picture1 = styled.div`
  
`
const Picture2 = styled.div`
  
`


  