import React from 'react'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';

const { kakao } = window;

export const ShowMap = () => {
  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate('/home')
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
      <Title><h3>음식점 찾기</h3></Title>
       <div id='myMap' style={{
            width: '500px', 
            height: '500px',
        }}></div>
        <Button variant="outline-success" style={{}} onClick={handleClickButton}>처음으로</Button>
    </Container>
  )
}

export default ShowMap;

const Container = styled.div`
  width: 100%;
  height: 94%;
  background-color:#F1F8E0;
  position:absolute;
`
const Title = styled.div`
  font-size: 30pt;
  display: flex;
  justify-content: center;
  align-items: center;
`