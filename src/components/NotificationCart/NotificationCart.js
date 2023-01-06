import classNames from "classnames/bind";
import styles from "./NotificationCart.module.scss";

const cx = classNames.bind(styles);

function NotificationCart ({ content, icon }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon')}>{icon}</div>
            <div className={cx('content')}>{content}</div>
        </div>
    )
}

export default NotificationCart;