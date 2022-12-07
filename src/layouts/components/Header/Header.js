import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Input from '~/components/Input';
import config from '~/config';
import { CartIcon, LogoIcon } from '~/components/Icons';
import ProductType from '~/components/ProductType';
import Search from '~/components/Search';

const cx = classNames.bind(styles);

function Header () {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('extra-header')}>
                <div className={cx('content')}>
                    <div>
                        <Tippy 
                            trigger='click'
                            interactive
                            offset={[0, 0]}
                            placement='bottom-start'
                            render={attrs => (
                                <div className={cx('support-extra')} {...attrs}>
                                    <PopperWrapper>
                                        <div className={cx('qr-code')}>
                                            <img className={cx('qr-img')} src='https://media3.scdn.vn/img2/2018/5_23/R842FO.png' alt='QR Code'/>
                                        </div>
                                        <div className={cx('qr-title')}>Quét để tải ứng dụng</div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('extra')}>Tải ứng dụng</div>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy 
                            trigger='click'
                            interactive
                            offset={[0, 0]}
                            placement='bottom-start'
                            render={attrs => (
                                <div className={cx('support-extra')} {...attrs}>
                                    <PopperWrapper>
                                        <Button text>Trung tâm hỗ trợ</Button>
                                        <Button text>Trả hàng hoàn tiền</Button>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('extra')}>Chăm sóc khách hàng</div>
                        </Tippy>
                    </div>

                    <div>
                        <Tippy 
                            trigger='click'
                            interactive
                            offset={[0, 0]}
                            placement='bottom-start'
                            render={attrs => (
                                <div className={cx('support-extra')} {...attrs}>
                                    <PopperWrapper>
                                        <Input small placeholder='Nhập mã đơn hàng' />
                                        <Input small placeholder='Email/Số điện thoại' />
                                        <Button primary medium>Kiểm tra</Button>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('extra')}>Kiểm tra đơn hàng</div>
                        </Tippy>
                    </div>
                </div>
            </div>
            <div className={cx('main-header')}>
                <div className={cx('content')}>
                    <div className={cx('body')}>
                        <div className={cx('left')}>
                            <Link to={config.routes.home} className={cx('logo-shop')}>
                                <LogoIcon />
                            </Link>
                        </div>

                        <div className={cx('middle')}>
                            <div className={cx('left-search')}>
                                <ProductType />
                            </div>
                            <Search />
                        </div>

                        <div className={cx('right')}>
                            <Link to={config.routes.cart} className={cx('cart')}>
                                <CartIcon />
                            </Link>
                            <Link to={config.routes.login} className={cx('login')}>
                                <Button small normal>Đăng nhập</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;