import classNames from "classnames/bind";

import Input from "~/components/Input";
import Button from "~/components/Button";
import FeatureShop from "../FeatureShop";
import styles from './Footer.module.scss';
import AppStore from '~/assets/image/AppStore.png';
import GooglePlay from '~/assets/image/GooglePlay.png';
import AppGallery from "~/assets/image/AppGallery.png";
import BoCongThuong from '~/assets/image/BoCongThuong.png';
import ChongGia from '~/assets/image/ChongGia.png';

const cx = classNames.bind(styles);

function Footer () {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('top')}>
                <div className={cx('inner')}>
                    <FeatureShop />
                </div>
            </div>
            
            <div className={cx('middle')}>
                <div className={cx('inner')}>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            Về chúng tôi
                        </div>
                        <div className={cx('list-items')}>
                            <a href="/" className={cx('item')}>Giới thiệu Sendo.vn</a>
                            <a href="/" className={cx('item')}>Giới thiệu SenMall</a>
                            <a href="/" className={cx('item')}>Quy chế hoạt động</a>
                            <a href="/" className={cx('item')}>Chính sách bảo mật</a>
                            <a href="/" className={cx('item')}>Giao hàng và Nhận hàng</a>
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
                            <a href="/" className={cx('item')}>Quy định đối với người bán</a>
                            <a href="/" className={cx('item')}>Chính sách bán hàng</a>
                            <a href="/" className={cx('item')}>Hệ thống tiêu chí kiểm duyệt</a>
                            <a href="/" className={cx('item')}>Mở shop trên Sendo</a>
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
                        <p className={cx('text-info', 'text-bold', 'title-company')}>
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
                            <img src={BoCongThuong} alt='Bộ công thương' className={cx('img-cer')} />
                            <img src={ChongGia} alt="Tem chống giả" className={cx('img-cer')} />
                        </div>
                    </div>
                    <div className={cx('register-email')}>
                        <div className={cx('text-bold', 'promotion')}>
                            Đăng ký nhận bản tin ưu đãi khủng từ Sendo
                        </div>
                        <div className={cx('form-register')}>
                            <div className={cx('mr-8')}>
                                <Input placeholder="Email của bạn là " medium />
                            </div>
                            <Button primary small>Đăng ký</Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;