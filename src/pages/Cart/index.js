import classNames from "classnames/bind";
import { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
import { DotLoader } from "react-spinners";

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
    const [isLoading, setIsLoading]= useState(true);

    useEffect(() => {
        const configHeader = {
            headers: { Authorization: `Bearer ${jwt}` }
        }
        axios.get('http://localhost:1337/api/cart/get', configHeader)
            .then(res => {
                setProducts(res.data);
                setIsLoading(false);
                window.scrollTo({ top: 0, behavior: "smooth" })
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err);
            });
    }, [jwt]);

    const handleRefreshApi = () => {
        const configHeader = {
            headers: { Authorization: `Bearer ${jwt}` }
        }
        axios.get('http://localhost:1337/api/cart/get', configHeader)
            .then(res => {
                setProducts(res.data);
                setIsLoading(false);
                window.scrollTo({ top: 0, behavior: "smooth" })
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err);
            });
    }

    if (!isLoading) {
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
                                                id = {product.id}
                                                shop_icon={product.shop_icon}
                                                shop_name={product.shop_name}
                                                img_avatar={product.img_avatar}
                                                name={product.name}
                                                size={!!product.size ? product.size : ""}
                                                color={!!product.color ? product.color: ""}
                                                original_price={!!product.original_price ? product.original_price: ""}
                                                price={product.price}
                                                SEOURL={product.SEOURL}
                                                reloadProduct = {handleRefreshApi}
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
    } else {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('loading')}>
                    <DotLoader
                        size={40}
                        loading={isLoading}
                        color={"#ee2624"}
                    />
                </div>
            </div>
        )
    }
}

export default Cart;