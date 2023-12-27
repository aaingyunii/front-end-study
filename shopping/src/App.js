import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './Components/HeaderNav';
import Background from './Components/Background';
import getProducts from './Service/fetch';
function App() {
  return (
    <div className="App">
        <HeaderNav/>
        <Background/>
    </div>
  );
}

console.log(getProducts);

export default App;