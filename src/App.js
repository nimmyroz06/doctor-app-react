import logo from './logo.svg';
import './App.css';
import Adddoctor from './components/Adddoctor';
import SearchDoc from './components/SearchDoc';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Adddoctor/>}/>
      <Route path='/search' element={<SearchDoc/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
