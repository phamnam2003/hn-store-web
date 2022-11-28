import classNames from "classnames/bind";
import styles from './SearchItem.module.scss';

const cx = classNames.bind(styles);

function SearchItem ({ data }) {
    return (
        <div className={cx('wrapper')}>
            {data.content}
        </div>
    )
}

export default SearchItem;