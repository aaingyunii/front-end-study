/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [titles , setTitle] = useState(
    ["패딩 추천","겨울 상의 추천","코트 추천"]
    );

  let [like, setLike] = useState(0);

  return (
    <div className="App">
      {/* navbar 생성 */}
      <div className="black-nav" style={ { color : 'wheat', fontSize : '30px'}} >
        예시 blog
      </div>

      <button onClick={ () => {
        let copy = [...titles];
        copy[0] = '반팔추천';

        setTitle(copy)  
      }}>글 변경</button>

      {/* 리스트 생성 */}
      <div className="list">
        <h3>{ titles[0] }
        <span onClick={ () => { setLike(like + 1)}}>👍</span> { like } </h3>
        <p>12월 18일 발행</p>
      </div>

      <div className="list">
        <h3>{ titles[1] } </h3>
        <p>12월 19일 발행</p>
      </div>

      <div className="list">
        <h3>{ titles[2] } </h3>
        <p>12월 19일 발행</p>
      </div>

      <Modal/>

    </div>

  );
}

function Modal(){
  return(
  <div className='modal'>
    <h4>{ } 상세 내용</h4>
    <p>날짜 : </p>
    <p>내용</p>
</div>
  );
}

export default App;
