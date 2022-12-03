import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./ShoppingProduct.module.scss";
import Button from "../Button";
import { HeartIcon, ShareIcon } from "../Icons";
// import button

const cx = classNames.bind(styles);

function ShoppingProduct ({ SEOURL_product }) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:1337/api/products?filters[SEOURL][$eq]=${SEOURL_product}`)
            .then(res => setProduct(res.data.data))
            .catch(err => console.log(err))
    }, [SEOURL_product]);

    if (product) {
        const IMG_DESC = product.map(info => info.attributes.img_desc).toString().split(",");
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                { product.map(info => (
                    <div className={cx('content')} key={info.id}>
                        <div className={cx('left')}>
                            <div className={cx('top-left')}>
                                <img 
                                    src={info.attributes.img_avatar} 
                                    alt={info.attributes.name} 
                                    className={cx('img-avatar')}/>
                                <div className={cx('button')}>
                                    <Button action><ShareIcon/></Button>
                                    <Button action><HeartIcon/></Button>
                                </div>
                            </div>
                            <div className={cx('bottom-left')}>
                                <img src="" alt="Ảnh mô tả sản phẩm"/>
                            </div>
                        </div>
                        <div className={cx('right')}>Right</div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default ShoppingProduct;