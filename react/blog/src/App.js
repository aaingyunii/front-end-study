import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '고기고기';
  function 함수(){
    return 100;
  }
  return (
    <div className="App">
      {/* navbar 만들기 */}
      <div className="black-nav" style={ { color : 'wheat', fontSize : '30px'}} >
        개발 blog
      </div>

      {/* 데이터 바인딩 예시 */}
      <img src={ logo } />
      <h4>{ posts }</h4>
      <h4>{ 함수() }</h4>


    </div>
  );
}

export default App;
