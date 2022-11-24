import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";

import Input from "~/components/Input";
import Button from "~/components/Button";
import styles from './Footer.module.scss';
import AppStore from '~/assets/image/AppStore.png';
import GooglePlay from '~/assets/image/GooglePlay.png';
import AppGallery from "~/assets/image/AppGallery.png";
import BoCongThuong from '~/assets/image/BoCongThuong.png';
import ChongGia from '~/assets/image/ChongGia.png';

const cx = classNames.bind(styles);

function Footer () {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1337/api/footer-banners')
            .then(res => {
                setBanners(res.data.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <footer className={cx('wrapper')}>
            <div className={cx('top')}>
                <div className={cx('inner')}>
                    {banners.map(banner => (
                        <div className={cx('banner-item')} key={banner.id}>
                            <img src={banner.attributes.img_src} alt="banner" className={cx('img')} />
                            <p className={cx('title')}>{banner.attributes.title}</p>
                            <p className={cx('description')}>{banner.attributes.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={cx('middle')}>
                <div className={cx('inner')}>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            Về chúng tôi
                        </div>
                        <div className={cx('list-items')}>
                            <a href="/" className={cx('item')}>Giới thiệu về Sendo</a>
                            <a href="/" className={cx('item')}>Giới thiệu về SenMail</a>
                            <a href="/" className={cx('item')}>Quy chế hoạt động</a>
                            <a href="/" className={cx('item')}>Chính sách bảo mật</a>
                            <a href="/" className={cx('item')}>Giao hàng và nhận hàng</a>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            Dành cho người mua
                        </div>
                        <div className={cx('list-items')}>
                            <a href="/" className={cx('item')}>Giải quyết khiếu nại</a>
                            <a href="/" className={cx('item')}>Hướng dẫn mua hàng</a>
                            <a href="/" className={cx('item')}>Chính sách đổi trả</a>
                            <a href="/" className={cx('item')}>Chăm sóc khách hàng</a>
                            <a href="/" className={cx('item')}>Nạp tiền điện thoại</a>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            Dành cho người bán
                        </div>
                        <div className={cx('list-items')}>
                            <a href="/" className={cx('item')}>Giải quyết khiếu nại</a>
                            <a href="/" className={cx('item')}>Hướng dẫn mua hàng</a>
                            <a href="/" className={cx('item')}>Chính sách đổi trả</a>
                            <a href="/" className={cx('item')}>Chăm sóc khách hàng</a>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            Tải ứng dụng Sendo
                        </div>
                        <div className={cx('container')}>
                            <p className={cx('text')}>
                                Mang thế giới mua sắm của Sendo trong tầm tay bạn
                            </p>
                            <div className={cx('app')}>
                                <img src={AppStore} alt="App Store" className={cx('img-app')}/>
                                <img src={GooglePlay} alt="Google Play" className={cx('img-app')} />
                                <img src={AppGallery} alt="App Gallery" className={cx('img-app')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('bottom')}>
                <div className={cx('inner')}>
                    <div className={cx('info-company')}>
                        <p className={cx('text-info')}>
                            Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT
                        </p>
                        <p className={cx('text-info')}>
                            Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20, ngày 26/04/2022.
                        </p>
                        <p className={cx('text-info')}>
                            Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.
                        </p>
                        <p className={cx('text-info')}>
                            Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam
                        </p>
                        <p className={cx('text-info')}>
                            Email: lienhe@sendo.vn
                        </p>
                        <div className={cx('certificate')}>
                            <img src={BoCongThuong} alt='Bộ công thương' />
                            <img src={ChongGia} alt="Tem chống giả" />
                        </div>
                    </div>
                    <div className={cx('register-email')}>
                        <Input placeholder="Email của bạn là"/>
                        <Button primary small>Đăng ký</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;