import './App.css';
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Main from './pages/Main';
import Result from './pages/Result';
import NavBarElements from './components/NavBarElements';

function App() {
  return (
    <>
    <NavBarElements />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </>
  );
}


export default App;
