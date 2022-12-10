import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Button from "~/components/Button";
import { LogoIcon } from "~/components/Icons";
import Input from "~/components/Input";
import config from "~/config";
import FacebookLogo from "~/assets/image/FacebookLogo.png";
import GoogleLogo from "~/assets/image/GoogleLogo.png";
import AppleLogo from "~/assets/image/AppleLogo.jfif";

import styles from "./Login.module.scss";

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
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title')}>
                        <div className={cx('top-left')}>
                            <LogoIcon />
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
                        <form className={cx('middle-form')}>
                            <div className={cx('user-input')}>
                                <Input 
                                    login 
                                    placeholder="Số điện thoại / Email / Tên đăng nhập"
                                    className={cx('input')}
                                />
                                {/* <p className={cx('error')}>Lỗi tài khoản</p> */}
                            </div>

                            <div className={cx('password')}>
                                <div className={cx('input-password')}>
                                    <Input
                                        login
                                        placeholder="Mật khẩu"
                                        type="password"
                                        className={cx('input')}
                                    />

                                    <div className={cx('change-type')}>
                                        
                                    </div>
                                </div>

                                {/* <p className={cx('error')}>Đăng nhập không thành công, mời bạn kiểm tra lại thông tin hoặc thay đổi cách thức đăng nhập</p> */}
                            </div>

                            <Button primary large>Đăng nhập</Button>
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
                        </form>
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