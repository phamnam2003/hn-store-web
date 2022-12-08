import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "~/config";

import styles from "./SearchPage.module.scss";

const cx = classNames.bind(styles);

function Search () {

    return (
        <div className={cx('wrapper')}>
           <div className={cx('inner')}>
                <div className={cx('title')}>
                    <div className={cx('top')}>
                        <Link to={config.routes.home} className={cx('back-home')}>
                            HN STORE
                        </Link>
                        <p className={cx('slash')}>/</p>
                        <p className={cx('page')}>Kết quả tìm kiếm</p>
                    </div>
                    <div className={cx('bottom')}>
                        <p className={cx('content-search')}>Content Search</p>
                        <p className={cx('page')}>Tìm thấy được kết quả</p>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('filter')}>
                        filter
                    </div>
                    <div className={cx('result-search')}>Product</div>
                </div>
           </div>
        </div>
    )
}

export default Search;