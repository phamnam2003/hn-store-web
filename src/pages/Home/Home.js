import classNames from "classnames/bind";
import styles from './Home.module.scss';

import RecommendCategory from "~/components/RecommendCategory";

const cx = classNames.bind(styles);

function Home () {
    return (
        <div className={cx('wrapper')}>
            <RecommendCategory />
        </div>
    )
}

export default Home;