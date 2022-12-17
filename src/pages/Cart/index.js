import classNames from "classnames/bind";
import { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";

import styles from "./Cart.module.scss";
import Shopping from "~/assets/image/Shopping.png";
import Button from "~/components/Button";
import config from "~/config";
import { VoucherIcon } from "~/components/Icons";
import CartItem from "~/components/CartItem";

const cx = classNames.bind(styles);

function Cart () {
    const jwt = localStorage.jwt;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1337/api/products?pagination[start]=3&pagination[limit]=1')
            .then(res => {
                setProducts(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>

                { products.length > 0 && jwt ? (
                    (
                        <>
                            <p className={cx('top')}>Giỏ hàng của bạn</p>
                            <div className={cx('bottom')}>
                                <div className={cx('left')}>
                                    { products.map(product => (

                                        <CartItem key={product.id}
                                            shop_icon={product.attributes.shop_icon}
                                            shop_name={product.attributes.shop_name}
                                            img_avatar={product.attributes.img_avatar}
                                            name={product.attributes.name}
                                            size={!!product.attributes.size ? product.attributes.size : ""}
                                            color={!!product.attributes.color ? product.attributes.color: ""}
                                            original_price={!!product.attributes.original_price ? product.attributes.original_price: ""}
                                            price={product.attributes.price}
                                            SEOURL={product.attributes.SEOURL}
                                        />

                                    )) }
                                </div>
                                <div className={cx('right')}>
                                    <div className={cx('voucher')}>
                                        <div className={cx('left-voucher')}>
                                            <VoucherIcon />
                                            <p className={cx('text-code')}>Mã ưu đãi HN Store (42)</p>
                                        </div>
                                        <p className={cx('right-voucher')}>Chọn/Nhập mã</p>
                                    </div>
                                    <div className={cx('pay')}>
                                        <p className={cx('text')}>Tạm tính:</p>
                                        <p className={cx('money')}>0đ</p>
                                    </div>
                                    <Button primary large>Mua ngay</Button>
                                </div>
                            </div>
                        </>
                    )
                ) : (
                    <div className={cx('empty-cart')}>
                        <img src={Shopping} alt="Shopping" className={cx('img-cart-empty')} />
                        <p className={cx('title-empty')}>Giỏ hàng cảm thấy trống trải</p>
                        <p className={cx('desc-empty')}>Ai đó ơi, mua sắm để nhận khuyến mãi từ HN Store ngay!</p>
                        <Button to={config.routes.home} primary large>Mua sắm ngay</Button>
                    </div>
                ) }

            </div>
        </div>
    )
}

export default Cart;