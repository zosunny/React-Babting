import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Main from './pages/Main';
import Result from './pages/Result';
// import NavBarElements from './components/Navbar/NavBarElements';
import NavBarElements from './components/NavBarElements';
import { ShowMap } from './pages/ShowMap';
function App() {
  return (
    <>
      <NavBarElements />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/result' element={<Result />} />
        <Route path='/showmap' element={<ShowMap />} />
      </Routes>
    </>
  );
}


export default App;
