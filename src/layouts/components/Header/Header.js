import { Link, useNavigate } from 'react-router-dom';
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
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Header () {
    const jwt = localStorage.jwt;
    const userinfo = localStorage.userinfo === undefined ? localStorage.userinfo : JSON.parse(localStorage.userinfo);

    const navigate = useNavigate();
    const [numberOrder, setNumberOrder] = useState(0);

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('userinfo');
        navigate('/');
    }
    // eslint-disable-next-line
    const configHeader = {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:1337/api/cart/get`, configHeader)
            .then(res => {
                setNumberOrder(res.data.length);
            })
            .catch(err => console.log(err));
    // eslint-disable-next-line
    }, [configHeader])

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
                                        <div className={cx('qr-title')}>Qu??t ????? t???i ???ng d???ng</div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('extra')}>T???i ???ng d???ng</div>
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
                                        <Button text>Trung t??m h??? tr???</Button>
                                        <Button text>Tr??? h??ng ho??n ti???n</Button>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('extra')}>Ch??m s??c kh??ch h??ng</div>
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
                                        <Input small placeholder='Nh???p m?? ????n h??ng' />
                                        <Input small placeholder='Email/S??? ??i???n tho???i' />
                                        <Button primary medium>Ki???m tra</Button>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('extra')}>Ki???m tra ????n h??ng</div>
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
                                { numberOrder > 0 && <div className={cx('number-order')}>{numberOrder}</div> }
                            </Link>
                            { !jwt ? (
                                <Link to={config.routes.login} className={cx('login')}>
                                    <Button small normal>????ng nh???p</Button>
                                </Link>
                            ) : <div>
                                    <Tippy 
                                        trigger='click'
                                        interactive
                                        placement='bottom-end'
                                        render={attrs => (
                                            
                                                <PopperWrapper {...attrs}>
                                                    <p className={cx('feature')}>Th??ng tin t??i kho???n</p>
                                                    <p className={cx('feature')}>??u ????i c???a t??i</p>
                                                    <p className={cx('feature')}>S???n ph???m y??u th??ch</p>
                                                    <p className={cx('feature')}>Shop y??u th??ch</p>
                                                    <p className={cx('feature')}>Theo d??i ????n h??ng</p>
                                                    <p className={cx('feature')}>????n h??ng d???ch v??? ti???n ??ch</p>
                                                    <p className={cx('strike-through')}></p>
                                                    <p className={cx('feature')} onClick={handleLogout}>Tho??t t??i kho???n</p>
                                                </PopperWrapper>
                                        )}
                                    >
                                        <Button account>{userinfo.username}</Button>
                                    </Tippy>
                                </div> }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;