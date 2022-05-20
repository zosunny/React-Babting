// import './App.css';
import { Routes,Route } from 'react-router-dom'
import Home from './Home';
import Main from './Main';
import Result from './Result';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/Result' element={<Result />} />
      </Routes>
    </>
  );
}


export default App;
