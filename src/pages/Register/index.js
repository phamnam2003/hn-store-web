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

import styles from "./Register.module.scss";
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

function Register () {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [password, setPassword] = useState('');
    const [showErrUsername, setShowErrUsername] = useState(false)
    const [showErrEmail, setShowErrEmail] = useState(false);
    const [showErrPass, setShowErrPass] = useState(false);
    const [showErrRePass, setShowErrRePass] = useState(false);
    const [errRegister, setErrRegister] = useState(false);

    const navigate = useNavigate();

    const emailValidation = (e) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        setEmail(e.target.value);
        if (email.match(regex)) {
            setShowErrEmail(false);
        }
        else {
            setShowErrEmail(true);
        }
    }

    const usernameValidation = e => {
        setUsername(e.target.value);
        if (e.target.value.length < 6 || e.target.value.length > 15) {
            setShowErrUsername(true);
        }
        else {
            setShowErrUsername(false);
        }
    }

    const rePasswordValidation = (e) => {
        setRePassword(e.target.value);
        if (e.target.value === password) {
            setShowErrRePass(false);
        } else {
            setShowErrRePass(true);
        }
    }

    const passwordValidation = e => {
        setPassword(e.target.value);
        if (e.target.value.length < 6 || e.target.value.length > 15) {
            setShowErrPass(true);
        } else {
            setShowErrPass(false);
        }
    }

    const jsonData = {
        'username': username,
        'email': email,
        'password': password
    }

    const handleRegister = () => {
        axios.post('http://localhost:1337/api/auth/local/register', jsonData)
            .then(res => {
                setErrRegister(false);

                // Save by localStorage for auto login after register
                localStorage.setItem('jwt', res.data.jwt);
                localStorage.setItem('userinfo', JSON.stringify(res.data.user))
                navigate('/', { replace: true });
            })

            .catch(err => {
                console.log(err.response);
                setErrRegister(true);
                navigate('/register', { replace: true })
            })
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title')}>
                        <div className={cx('top-left')}>
                            <Link to={config.routes.home}>
                                <LogoIcon />
                            </Link>
                            <p className={cx('page')}>Đăng kí</p>
                        </div>
                        <p className={cx('helper')}>Bạn cần giúp đỡ?</p>
                </div>
            </div>

            <div className={cx('body')}>
                <div className={cx('inner')}>
                    <div className={cx('form-login')}>
                        <div className={cx('top-form')}>
                            <p className={cx('title-form')}>Xin chào,</p>
                            <p className={cx('desc')}>Đăng kí tài khoản HN Store</p>
                        </div>
                        <div className={cx('middle-form')}>
                            <div className={cx('user-input')}>
                                <Input 
                                    login 
                                    placeholder="Email"
                                    className={cx('input')}
                                    autoComplete='off'
                                    value={email}
                                    onChange={emailValidation}
                                />
                                { showErrEmail && <p className={cx('error')}>Định dạng email chưa chính xác</p> }
                                <Input 
                                    login 
                                    placeholder="Tên đăng nhập"
                                    className={cx('input')}
                                    autoComplete='off'
                                    value={username}
                                    onChange={usernameValidation}
                                />
                                { showErrUsername && <p className={cx('error')}>Tên đăng nhập ít nhất chứa 6 kí tự và ít hơn 15 kí tự</p> }
                            </div>

                            <div className={cx('password')}>
                                <div className={cx('input-password')}>
                                    <Input
                                        login
                                        placeholder="Mật khẩu"
                                        type="password"
                                        className={cx('input')}
                                        autoComplete='off'
                                        onChange={passwordValidation}
                                        value={password}
                                    />
                                    { showErrPass && <p className={cx('error')}>Mật khẩu ít nhất chứa 6 kí tự không được vượt quá 15 kí tự</p> }
                                    <Input
                                        login
                                        placeholder="Nhập lại mật khẩu"
                                        type="password"
                                        className={cx('input')}
                                        autoComplete='off'
                                        value={rePassword}
                                        onChange={rePasswordValidation}
                                    />
                                </div>

                                { showErrRePass && <p className={cx('error')}>Mật khẩu không trùng khớp. Vui lòng kiểm tra lại</p> }
                                { errRegister && <p className={cx('error')}>Đăng kí không thành công do email hoặc tên người dùng đã được sử dụng</p> }
                            </div>

                            { showErrEmail === false && showErrRePass === false && showErrUsername === false && email &&
                                username && password && rePassword ? (
                                    <Button primary large onClick={handleRegister}>Đăng kí</Button>
                                ) : <Button primary disabled>Đăng kí</Button>   
                            }
                            <div className={cx('action-other')}>
                                
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
                            <p className={cx('asked-user')}>Bạn đã có tài khoản tại HN Store?</p>
                            <Link to={config.routes.login} className={cx('redirect-register')}>Đăng nhập</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;