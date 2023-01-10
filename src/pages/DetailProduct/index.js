import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DotLoader from 'react-spinners/DotLoader';

import RandomProduct from "~/components/RandomProduct";
import styles from "./DetailProduct.module.scss";
import ShoppingProduct from "~/components/ShoppingProduct";
import StoreInfo from "~/components/StoreInfo";
import ProductInfo from "~/components/ProductInfo";

const cx = classNames.bind(styles);

function DetailProduct () {
    const [product, setProduct]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { SEOURL } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:1337/api/products?filters[SEOURL][$eq]=${SEOURL}`)
            .then(res => {
                setProduct(res.data.data);
                window.scrollTo({ top: 0})
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err)
            })
    }, [SEOURL]);

    if (!isLoading) {
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
                            <ProductInfo product={product} />
                        </div>
                    </div>
                    <p className={cx('text-recommend-product')}>
                        Ở đây có sản phẩm bạn thích
                    </p>
                    <RandomProduct />
                </div>
            </div>
        )
    } else {
        return (
            <div className={cx('wrapper')}>
                <DotLoader 
                    size={40}
                    color={"#ee2624"}
                    loading={isLoading}
                />
            </div>
        )
    }
}

export default DetailProduct;