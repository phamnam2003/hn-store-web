import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from './SearchItem.module.scss';

const cx = classNames.bind(styles);

function SearchItem ({ data }) {
    return (
        <Link to = {`/products/${data.attributes.SEOURL}`}>
            <div className={cx('wrapper')}>
               {data.attributes.name}
            </div>
        </Link>
    )
}

export default SearchItem;