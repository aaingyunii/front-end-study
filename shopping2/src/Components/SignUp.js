import { useState } from 'react';
import './css/SignUp.css';

function SignUp() {
    const [memberName, setMemberName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // 여기에서 필요한 작업 수행 (예: 회원가입 요청 등)
        console.log('Submit:', memberName, email, password1, password2);
    };

    return (
        <form onSubmit={handleSubmit} className="form-input">
            <div className="form-wrap">
                <div className="text-center mb">
                    <h1>회원가입</h1>
                </div>

                {/* 오류 메시지 표시 로직 추가 (fragment/form_errors :: formErrorsFragment) */}
                {/* <div>{/* formErrorsFragment 컴포넌트 추가 */}

                <div className="form-label-group">
                    <label htmlFor="inputName" id="nameLabel">아이디</label>
                    <input
                        type="text"
                        id="inputName"
                        className="form-input"
                        value={memberName}
                        onChange={(e) => setMemberName(e.target.value)}
                    />
                </div>

                <div className="form-label-group">
                    <label htmlFor="inputEmail" id="emailLabel">이메일</label>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-label-group">
                    <label htmlFor="inputPassword" id="passwordLabel">비밀번호</label>
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-input"
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
                    />
                </div>

                <div className="form-label-group">
                    <label htmlFor="inputPassword2" id="passwordLabel2">비밀번호 확인</label>
                    <input
                        type="password"
                        id="inputPassword2"
                        className="form-input"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </div>

                <button
                    className="btn btn-lg btn-primary btn-block"
                    id="signup-btn"
                    type="submit"
                    style={{ marginTop: '1rem' }}
                >
                    회원가입
                </button>
                <p className="mt-3 text-muted text-center">Copyright &copy; team i-Five</p>
            </div>
        </form>
    );
};

export default SignUp;
