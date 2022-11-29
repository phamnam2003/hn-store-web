import classNames from "classnames/bind";

import styles from "./GenuineBrands.module.scss";

const cx = classNames.bind(styles);

function GenuineBrands () {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('top')}>
                    <p className={cx('title')}>Thương hiệu chính hãng</p>
                    <p className={cx('see-all')}>Xem tất cả</p>
                </div>

                <div className={cx('middle')}>

                </div>

                <div className={cx('bottom')}>

                </div>
            </div>
        </div>
    )
}

export default GenuineBrands;