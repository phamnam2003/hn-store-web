import classNames from "classnames/bind";

import styles from "./ProductInfo.module.scss";

const cx = classNames.bind(styles);

function ProductInfo () {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                Product Info
            </div>
        </div>
    )
}

export default ProductInfo;