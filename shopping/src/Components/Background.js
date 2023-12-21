import './css/Background.css';
import { Button } from "react-bootstrap";

function Background(){
    return(
        <div className="background">
            <h1>ShowUwanna 사이트</h1>
            <p>
                당신이 원하는 것, 그것을 찾을 수 있다.
            </p>
            <Button variant="success" onClick={ function(){
                window.open("https://www.naver.com/")
            }}>검색하면 됨 ㅎ</Button>
        </div>
    );
}

export default Background;