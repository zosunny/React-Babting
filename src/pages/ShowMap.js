import React from 'react'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const { kakao } = window;

export const ShowMap = () => {
  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate('/')
  }
  React.useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <Container>
      <Title>음식점 찾기</Title>
       <div id='myMap' style={{
            width: '500px', 
            height: '500px',
            margin: 'auto',
            padding: '10px',
            border: '2px solid gray'
        }}></div>
      <Btn>
        <Button variant="outline-success" onClick={handleClickButton}>처음으로</Button>
      </Btn>
    </Container>
  )
}

export default ShowMap;

const Container = styled.div`
  font-family: 'CBNUJIKJI';
  width: 100%;
  height: 94%;
  background-color:#F1F8E0;
  position:absolute;
`
const Title = styled.div`
  font-size: 30pt;
  display: flex;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
`

const Btn = styled.div`
  position:absolute;
  justify-content: center;
  align-items: center;
  transform: translate(-50%,-50%);
  top: 89%;
  left: 50%;
`