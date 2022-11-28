import classNames from "classnames/bind";
import styles from './Home.module.scss';

import RecommendCategory from "~/components/RecommendCategory";
import FlashSaleProduct from "~/components/FlashSaleProduct";
import Promotion from "~/assets/image/Promotion.png";

const cx = classNames.bind(styles);

function Home () {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <RecommendCategory />
                <div className={cx('promotion')}>
                    <img src={Promotion} className={cx('img-promotion')} alt='Promotion' />
                </div>
            </div>
            {/* <br /> */}
            <div className={cx('middle')}>
                <FlashSaleProduct />
            </div>
            <div className={cx('bottom')}>

            </div>
        </div>
    )
}

export default Home;