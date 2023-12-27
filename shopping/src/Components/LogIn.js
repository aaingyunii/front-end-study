import { useState } from 'react';
import './css/LogIn.css';

function LogIn() {
    // React 상태(state)를 사용하여 입력 값 관리
    const [memberName, setMemberName] = useState('');
    const [password, setPassword] = useState('');

    // 폼 제출 시 처리할 함수
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 제출 동작 방지

        // 여기에서 필요한 작업 수행 (예: 로그인 요청 등)
        console.log('Submit:', memberName, password);
    };

    return (
        <form onSubmit={handleSubmit} className="form-input">
            <div className="form-wrap">
                <div className="text-center mb">
                    <h1>로그인</h1>
                </div>

                <div className="form-label-group">
                    <label htmlFor="memberName" id="nameLabel">아이디</label>
                    {/* 입력 값이 변경될 때마다 상태 업데이트 */}
                    <input
                        type="text"
                        name="memberName"
                        id="inputName"
                        className="form-input"
                        value={memberName}
                        onChange={(e) => setMemberName(e.target.value)}
                    />
                </div>
                <div className="form-label-group">
                    <label htmlFor="password" id="passwordLabel">비밀번호</label>
                    {/* 입력 값이 변경될 때마다 상태 업데이트 */}
                    <input
                        type="password"
                        name="password"
                        id="inputPassword"
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* submit 버튼 클릭 시 handleSubmit 함수 호출 */}
                <button
                    className="btn btn-lg btn-primary btn-block"
                    id="login-btn"
                    type="submit"
                    style={{ marginTop: '1rem' }}
                >
                    로그인
                </button>
                <p className="mt-3 text-muted text-center">Copyright &copy; team i-Five</p>
            </div>
        </form>
    );
}

export default LogIn;
