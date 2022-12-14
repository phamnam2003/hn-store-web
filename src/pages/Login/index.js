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
                            <p className={cx('page')}>????ng nh???p</p>
                        </div>
                        <p className={cx('helper')}>B???n c???n gi??p ??????</p>
                </div>
            </div>

            <div className={cx('body')}>
                <div className={cx('inner')}>
                    <div className={cx('form-login')}>
                        <div className={cx('top-form')}>
                            <p className={cx('title-form')}>Xin ch??o,</p>
                            <p className={cx('desc')}>????ng nh???p t??i kho???n ????? d??? d??ng mua s???n ph???m t??? HN Store c??ng nh?? nh???n ???????c nhi???u ??u ????i</p>
                        </div>
                        <div className={cx('middle-form')}>
                            <div className={cx('user-input')}>
                                <Input 
                                    login 
                                    placeholder="S??? ??i???n tho???i / Email / T??n ????ng nh???p"
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
                                        placeholder="M???t kh???u"
                                        type="password"
                                        className={cx('input')}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onKeyPress={handleEnter}
                                        autoComplete='off'
                                    />
                                </div>

                                { showError && <p className={cx('error')}>Th??ng tin t??i kho???n, m???t kh???u kh??ng ch??nh x??c. Vui l??ng ki???m tra l???i th??ng tin ????ng nh???p</p> }
                            </div>

                            { !!username && !!password ? (
                                <Button primary large onClick={handleLogin} id='login'>????ng nh???p</Button>
                            ) : <Button primary disabled>????ng nh???p</Button> }
                            <div className={cx('action-other')}>
                                <div className={cx('top-action')}>
                                    <p className={cx('text-action-link')}>Qu??n m???t kh???u</p>
                                    <p className={cx('text-action-link')}>????ng nh???p v???i sms</p>
                                </div>
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
                            <p className={cx('asked-user')}>B???n m???i bi???t ?????n HN Store?</p>
                            <Link to={config.routes.register} className={cx('redirect-register')}>????ng k??</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;