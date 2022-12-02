import classNames from "classnames/bind";

import styles from "./ShoppingProduct.module.scss";

const cx = classNames.bind(styles);

function ShoppingProduct () {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')}>DetailProduct</div>
            </div>
        </div>
    )
}

export default ShoppingProduct;