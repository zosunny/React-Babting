import React from "react";
import styled from "styled-components";

export const  BGImage = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;   //(원래 위치 기준 좌표지정)다른 element들이랑 겹치지 않게
  display: flex;        //영역이 사라지지 않고 유지됨
  justify-content: center;  //display: flex 랑 같이 사용. 
  overflow: hidden;         //부모요소의 범위 넘어가는 자식요소의 부분은 안보임
  align-items: center;      //display: flex 랑 같이 사용.
  &::before {           //가상(인라인)요소. 실제 내용 바로 앞에 생성되는 자식요소
    content: '';        //가상요소와 함께 사용되는 가짜 속성
    position: absolute; //절대 좌표 위치 지정
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    max-width: 100%;
    min-height: 40px;
    display: inline-block;  //position을 absolute로 주는 순간 블럭 속성 풀림
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    transform: scaleX(1.5); //X축 150% 확대
    background-position: right top;
    background-size: 100vw 200px;
    background-color: #282c34;
  }
`

export const MainHeader = styled.div`
  position: relative;
  z-index: 1;     //우선순위 주기
  margin: 0 auto;
  max-width: 500px;
  background-color: transparent;
`