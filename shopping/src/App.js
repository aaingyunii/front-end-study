import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderNav from './Components/HeaderNav';
import Background from './Components/Background';
import Main from './Components/Main';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
        <Background/>
      </BrowserRouter>
    </div>
  );
}

export default App;