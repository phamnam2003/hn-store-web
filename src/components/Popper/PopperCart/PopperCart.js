import classNames from "classnames/bind";

import styles from "./PopperCart.module.scss";

const cx = classNames.bind(styles);

function PopperCart ({ children }) {
    return (
        <div className={cx('wrapper')}>
            { children }
        </div>
    )
}

export default PopperCart;