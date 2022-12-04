import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import RandomProduct from "~/components/RandomProduct";
import Button from "~/components/Button";
import styles from "./DetailProduct.module.scss";
import ShoppingProduct from "~/components/ShoppingProduct";
import StoreInfo from "~/components/StoreInfo";
import ProductInfo from "~/components/ProductInfo";

const cx = classNames.bind(styles);

function DetailProduct () {
    const [product, setProduct]= useState([]);
    const { SEOURL } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:1337/api/products?filters[SEOURL][$eq]=${SEOURL}`)
            .then(res => setProduct(res.data.data))
            .catch(err => console.log(err))
    }, [SEOURL]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <ShoppingProduct product={product} />
            </div>

            <div className={cx('middle')}>
                <div className={cx('shop-and-info')}>
                    <div className={cx('store-info')}>
                        <StoreInfo product={product} />
                    </div>
                    <div className={cx('product-info')}>
                        <ProductInfo SEOURL_product={SEOURL} />
                    </div>
                </div>
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