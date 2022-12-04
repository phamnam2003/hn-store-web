import classNames from "classnames/bind";

import styles from "./StoreInfo.module.scss";
import ShopPlus from "~/assets/image/ShopPlus.png";

const cx = classNames.bind(styles);

function StoreInfo ({ SEOURL }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <div className={cx('info-shop')}>
                    <div className={cx('avatar-shop')}></div>
                    <div className={cx('info')}>
                        <div className={cx('name')}></div>
                        <img src={ShopPlus} alt="Shop Plus" />
                        <div className={cx('adress-and-reviews')}>
                            <div className={cx('adress')}></div>
                            <div className={cx('reviews')}>★</div>
                        </div>
                    </div>
                </div>

                <div className={cx('response-shop')}>
                    <div className={cx('response')}>
                        <div className={cx('text-content')}>4 năm</div>
                        <p className={cx('title')}>Bán ở Sendo</p>
                    </div>

                    <div className={cx('response')}>
                        <div className={cx('text-content')}>9535</div>
                        <p className={cx('title')}>Sản phẩm</p>
                    </div>

                    <div className={cx('response')}>
                        <div className={cx('text-content')}>2 ngày</div>
                        <p className={cx('title')}>Chuẩn bị hàng</p>
                    </div>

                    <div className={cx('response')}>
                        <div className={cx('text-content')}>100%</div>
                        <p className={cx('title')}>Tỉ lệ phản hồi</p>
                    </div>

                    <div className={cx('response')}>
                        <div className={cx('text-content')}>Ngay</div>
                        <p className={cx('title')}>Shop phản hồi</p>
                    </div>
                </div>

                <div className={cx('action-shop')}>

                </div>
            </div>
            <div className={cx('bottom')}>
                Gợi ý thêm từ Shop
            </div>
        </div>
    )
}

export default StoreInfo;