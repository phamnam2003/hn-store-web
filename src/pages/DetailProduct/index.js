import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import RandomProduct from "~/components/RandomProduct";
import Button from "~/components/Button";
import styles from "./DetailProduct.module.scss";
import ShoppingProduct from "~/components/ShoppingProduct";

const cx = classNames.bind(styles);

function DetailProduct () {
    const { SEOURL } = useParams();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <ShoppingProduct SEOURL_product={SEOURL} />
            </div>

            <div className={cx('middle')}>
                <p className={cx('text-recommend-product')}>
                    Ở đây có sản phẩm bạn thích
                </p>
                <RandomProduct />
            </div>

            <div className={cx('bottom')}>
                <div className={cx('button')}>
                    <Button large special>Xem thêm</Button>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct;