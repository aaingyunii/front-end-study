import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './Components/HeaderNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Components/LogIn';
import Main from './Components/Main';
import Cart from './Components/Cart';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
