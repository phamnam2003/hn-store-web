import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "~/components/Button";
import { LogoIcon } from "~/components/Icons";
import Input from "~/components/Input";
import config from "~/config";
import FacebookLogo from "~/assets/image/FacebookLogo.png";
import GoogleLogo from "~/assets/image/GoogleLogo.png";
import AppleLogo from "~/assets/image/AppleLogo.jfif";

import styles from "./Login.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);
const LOGIN_OTHER = [
    {
        id: 1,
        src_img: FacebookLogo,
        title: "Facebook"
    }, 
    {
        id: 2,
        src_img: GoogleLogo,
        title: "Google"
    },
    {
        id: 3,
        src_img: AppleLogo,
        title: "Apple"
    }
]

function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    const handleEnter = (e) => {
        if (username && password && e.key === "Enter") {
            document.getElementById('login').click();
        }
    }

    const handleLogin = () => {
        axios.post('http://localhost:1337/api/auth/local', {
            identifier: username,
            password: password
        })
            .then(res => {
                setShowError(false);

                // set item in localStorage for change UI header and can add product 
                localStorage.setItem('jwt', res.data.jwt);
                // user info
                localStorage.setItem('userinfo', JSON.stringify(res.data.user));
                navigate('/', { replace: true });
            })

            .catch(err => {
                console.log(err.response);
                setShowError(true);
                setPassword('');
            });
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title')}>
                        <div className={cx('top-left')}>
                            <Link to={config.routes.home}>
                                <LogoIcon />
                            </Link>
                            <p className={cx('page')}>Đăng nhập</p>
                        </div>
                        <p className={cx('helper')}>Bạn cần giúp đỡ?</p>
                </div>
            </div>

            <div className={cx('body')}>
                <div className={cx('inner')}>
                    <div className={cx('form-login')}>
                        <div className={cx('top-form')}>
                            <p className={cx('title-form')}>Xin chào,</p>
                            <p className={cx('desc')}>Đăng nhập tài khoản để dễ dàng mua sản phẩm từ HN Store cũng như nhận được nhiều ưu đãi</p>
                        </div>
                        <div className={cx('middle-form')}>
                            <div className={cx('user-input')}>
                                <Input 
                                    login 
                                    placeholder="Số điện thoại / Email / Tên đăng nhập"
                                    className={cx('input')}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoComplete='off'
                                />
                            </div>

                            <div className={cx('password')}>
                                <div className={cx('input-password')}>
                                    <Input
                                        login
                                        placeholder="Mật khẩu"
                                        type="password"
                                        className={cx('input')}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onKeyPress={handleEnter}
                                        autoComplete='off'
                                    />
                                </div>

                                { showError && <p className={cx('error')}>Thông tin tài khoản, mật khẩu không chính xác. Vui lòng kiểm tra lại thông tin đăng nhập</p> }
                            </div>

                            { !!username && !!password ? (
                                <Button primary large onClick={handleLogin} id='login'>Đăng nhập</Button>
                            ) : <Button primary disabled>Đăng nhập</Button> }
                            <div className={cx('action-other')}>
                                <div className={cx('top-action')}>
                                    <p className={cx('text-action-link')}>Quên mật khẩu</p>
                                    <p className={cx('text-action-link')}>Đăng nhập với sms</p>
                                </div>
                                <div className={cx('text-middle-action')}>-------- HOẶC --------</div>
                                <div className={cx('bottom-action')}>
                                    
                                    { LOGIN_OTHER.map(item => (
                                        <div className={cx('login-other-btn')} key={item.id}>
                                            <img src={item.src_img} alt={item.title} className={cx('img-account')}/>
                                            <p className={cx('title-account')}>{item.title}</p>
                                        </div>
                                    )) }

                                </div>
                            </div>
                        </div>
                        <div className={cx('bottom-form')}>
                            <p className={cx('asked-user')}>Bạn mới biết đến HN Store?</p>
                            <Link to={config.routes.register} className={cx('redirect-register')}>Đăng kí</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;