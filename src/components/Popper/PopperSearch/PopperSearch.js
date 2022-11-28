import classNames from "classnames/bind";
import styles from "./PopperSearch.module.scss";

const cx = classNames.bind(styles);

function PopperSearch ({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>Kết quả tìm kiếm</div>
            {children}
        </div>
    )
}

export default PopperSearch;