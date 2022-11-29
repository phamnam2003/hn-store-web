import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./FlashSaleProduct.module.scss";
import FlashSaleLogo from "~/assets/image/FlashSaleLogo.png";
import TextFlashSale from "~/assets/image/TextFlashSale.png";
import CountDown from "../CountDown";

const cx = classNames.bind(styles);

function FlashSaleProduct () {
    const [flashSaleProducts, setFlashSaleProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1337/api/flash-sale-products')
            .then(res => setFlashSaleProducts(res.data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <div className={cx('left')}>
                        <div className={cx('sale')}>
                            <img src={FlashSaleLogo} alt='Flash Sale' className={cx('img-flash-sale')}/>
                        </div>
                        <CountDown timerMinutes={30} />
                    </div>

                    <div className={cx('see-all', 'right')}>Xem tất cả</div>
                </div>
                <div className={cx('products')}>
                    { flashSaleProducts.map(product => (
                        <div className={cx('card-product')} key={product.id}>
                            <img src={product.attributes.img_product_sale} alt='Flash Sale Product' className={cx('img-product')} />
                            <img src={TextFlashSale} alt="Xả hàng" className={cx('img-text-sale')}/>
                            
                            <div className={cx('price-product')}>
                                <p className={cx('price')}>{product.attributes.price}</p>
                                {/* Giảm giá */}
                                <div className={cx('discount')}> 
                                    <p className={cx('original-price')}>
                                        {product.attributes.original_price}
                                    </p>

                                    <p className={cx('discount-percent')}>
                                        {product.attributes.percent}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default FlashSaleProduct;