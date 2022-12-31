import classNames from "classnames/bind";

import Button from "~/components/Button";
import config from "~/config";
import styles from "./ErrorPage.module.scss";
import ErrorPageImage from "~/assets/image/ErrorPage.png";

const cx = classNames.bind(styles);

function ErrorPage ()  {
    return (
        <div className={cx('wrapper')}>
            <img src={ErrorPageImage} alt="404 not found" className={cx('img-error')} />
            <div className={cx('notification-error')}>Không tìm thấy nội dung 😓</div>
            <div className={cx('detail-error')}>
                <div className={cx('content')}>
                    URL của nội dung này đã <p className={cx('important')}>bị thay đổi</p> hoặc <p className={cx('important')}>không còn tồn tại</p>
                </div>
                <div className={cx('content')}>
                    Nếu bạn <p className={cx('important')}>đang lưu URL này</p>, hãy thử <p className={cx('important')}>truy cập lại từ trang chủ</p> thay vì dùng URL đã lưu.
                </div>
            </div>
            <Button primary largest to = {config.routes.home}>Quay về trang chủ</Button>
        </div>
    )
}

export default ErrorPage;