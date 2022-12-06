import classNames from "classnames/bind";
import styles from './Home.module.scss';

import RecommendCategory from "~/components/RecommendCategory";
import FlashSaleProduct from "~/components/FlashSaleProduct";
import GenuineBrands from "~/components/GenuineBrands";
import Promotion from "~/assets/image/Promotion.png";
import RandomProduct from "~/components/RandomProduct";
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
            <div className={cx('middle')}>
                <FlashSaleProduct />
                <GenuineBrands />
                <RandomProduct />
            </div>
        </div>
    )
}

export default Home;