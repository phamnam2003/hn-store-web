import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import Button from "~/components/Button";
import { LogoIcon } from "~/components/Icons";
import Input from "~/components/Input";
import config from "~/config";
import FacebookLogo from "~/assets/image/FacebookLogo.png";
import GoogleLogo from "~/assets/image/GoogleLogo.png";
import AppleLogo from "~/assets/image/AppleLogo.jfif";
import styles from "./Register.module.scss";


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
                localStorage.setItem('userinfo', JSON.stringify(res.data.user));

                fetch(`http://localhost:1337/api/cart/create`, {
                        method: 'GET',
                        headers: new Headers({
                            'Authorization': 'Bearer ' + localStorage.jwt,
                            'Content-Type': 'application/x-www-form-urlencoded'
                        })
                    });
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
                            <p className={cx('page')}>????ng k??</p>
                        </div>
                        <p className={cx('helper')}>B???n c???n gi??p ??????</p>
                </div>
            </div>

            <div className={cx('body')}>
                <div className={cx('inner')}>
                    <div className={cx('form-login')}>
                        <div className={cx('top-form')}>
                            <p className={cx('title-form')}>Xin ch??o,</p>
                            <p className={cx('desc')}>????ng k?? t??i kho???n HN Store</p>
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
                                { showErrEmail && <p className={cx('error')}>?????nh d???ng email ch??a ch??nh x??c</p> }
                                <Input 
                                    login 
                                    placeholder="T??n ????ng nh???p"
                                    className={cx('input')}
                                    autoComplete='off'
                                    value={username}
                                    onChange={usernameValidation}
                                />
                                { showErrUsername && <p className={cx('error')}>T??n ????ng nh???p ??t nh???t ch???a 6 k?? t??? v?? ??t h??n 15 k?? t???</p> }
                            </div>

                            <div className={cx('password')}>
                                <div className={cx('input-password')}>
                                    <Input
                                        login
                                        placeholder="M???t kh???u"
                                        type="password"
                                        className={cx('input')}
                                        autoComplete='off'
                                        onChange={passwordValidation}
                                        value={password}
                                    />
                                    { showErrPass && <p className={cx('error')}>M???t kh???u ??t nh???t ch???a 6 k?? t??? kh??ng ???????c v?????t qu?? 15 k?? t???</p> }
                                    <Input
                                        login
                                        placeholder="Nh???p l???i m???t kh???u"
                                        type="password"
                                        className={cx('input')}
                                        autoComplete='off'
                                        value={rePassword}
                                        onChange={rePasswordValidation}
                                    />
                                </div>

                                { showErrRePass && <p className={cx('error')}>M???t kh???u kh??ng tr??ng kh???p. Vui l??ng ki???m tra l???i</p> }
                                { errRegister && <p className={cx('error')}>????ng k?? kh??ng th??nh c??ng do email ho???c t??n ng?????i d??ng ???? ???????c s??? d???ng</p> }
                            </div>

                            { showErrEmail === false && showErrRePass === false && showErrUsername === false && email &&
                                username && password && rePassword ? (
                                    <Button primary large onClick={handleRegister}>????ng k??</Button>
                                ) : <Button primary disabled>????ng k??</Button>   
                            }
                            <div className={cx('action-other')}>
                                
                                <div className={cx('text-middle-action')}>-------- HO???C --------</div>
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
                            <p className={cx('asked-user')}>B???n ???? c?? t??i kho???n t???i HN Store?</p>
                            <Link to={config.routes.login} className={cx('redirect-register')}>????ng nh???p</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;