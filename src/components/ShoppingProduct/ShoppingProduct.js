import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./ShoppingProduct.module.scss";
import Button from "../Button";
import { HeartIcon, ShareIcon } from "../Icons";
import ShopPlus from "~/assets/image/ShopPlus.png";
// import button

const cx = classNames.bind(styles);

function ShoppingProduct ({ SEOURL_product }) {
    const [product, setProduct] = useState([]);
    let IMG_DESC;

    useEffect(() => {
        axios.get(`http://localhost:1337/api/products?filters[SEOURL][$eq]=${SEOURL_product}`)
            .then(res => setProduct(res.data.data))
            .catch(err => console.log(err))
    }, [SEOURL_product]);

    if (product.length > 0) {
        IMG_DESC = product.map(info => info.attributes.img_desc).toString().split(",");
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

                                { IMG_DESC.map(link_img => (
                                    <img 
                                        src={link_img} 
                                        alt={link_img} 
                                        key={link_img}
                                        className={cx('img-desc')}
                                    />
                                )) }
                            </div>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('top-right')}>
                                <div className={cx('name-and-shop')}>
                                    <img src={ShopPlus} alt="Shop Plus" className={cx('shop-plus')} />
                                    {info.attributes.name}
                                </div>
                                <div className={cx('price')}>{info.attributes.price}đ</div>
                                
                                { info.attributes.original_price ? (
                                    <div className={cx('discount')}>
                                        <div className={cx('original-price')}>
                                            {info.attributes.original_price}đ
                                        </div>
                                        <div className={cx('percent-discount')}>
                                            Giảm {info.attributes.percent_discount}%
                                        </div>
                                    </div>
                                ) : <></> }

                                <div className={cx('reviews-and-sold')}>
                                    <div className={cx('star')}>★ ★ ★ ★ ★</div>
                                    <div className={cx('rate-product')}>{info.attributes.rate_product} đánh giá</div>
                                    <div className={cx('dot')}>•</div>
                                    <div className={cx('sold')}>{info.attributes.sold} lượt mua</div>
                                </div>
                            </div>
            
                            <div className={cx('middle-right')}>
                                { info.attributes.color ? (
                                    <div className={cx('color')}>
                                        <div className={cx('text')}>Chọn màu sắc:</div>
                                        <div className={cx('content-color')}>

                                        </div>
                                    </div>
                                ) : <></> }
                                { info.attributes.size ? (
                                    <div className={cx('color')}>
                                        <div className={cx('text')}>Chọn kích thước:</div>
                                    </div>
                                ) : <></> }
                                <div className={cx('amount')}>
                                    amount
                                </div>
                                <div className={cx('button-action')}>
                                    <Button>Thêm vào giỏ hàng</Button>
                                    <Button primary>Mua ngay</Button>
                                </div>
                            </div>

                            <div className={cx('bottom-right')}>
                                Bottom Right
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default ShoppingProduct;