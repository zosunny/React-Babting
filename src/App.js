import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Main from './pages/Main';
import Result from './pages/Result';
// import NavBarElements from './components/Navbar/NavBarElements';
import NavBarElements from './components/NavBarElements';
import ShowMap from './pages/ShowMap';
import Join from './pages/Join';
import Login from './pages/Login';
import MapElements from './components/MapElements';

function App() {
  return (
    <>
      <NavBarElements />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/result' element={<Result />} />
        <Route path='/showmap' element={<ShowMap />} />
        {/* <Route path='/map' element={<MapElements />} /> */}
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}


export default App;
