import classNames from "classnames/bind";
import { Fragment } from "react";

import styles from "./ProductItem.module.scss";
import FreeShip from "~/assets/image/FreeShip.png";
import ShopPlus from "~/assets/image/ShopPlus.png";
import Installment from "~/assets/image/Installment.png"

const cx = classNames.bind(styles);

function ProductItem ({ img_avatar, name, original_price, percent_discount, price, 
    sold, rate_product, adress }) {
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('img', 'top')}>
                    <img src={img_avatar} alt={name} className={cx('img-product')} />
                    <img src={FreeShip} alt='Free Ship' className={cx('free-ship')}/>
                </div>

                <div className={cx('bottom')}>
                    <div className={cx('name-and-shop')}>
                        <img src={ShopPlus} alt="Shop Plus" className={cx('shop-plus')} />
                        {name.toString().substring(0,40)}
                    </div>

                    { !!original_price ? (
                        <div className={cx('discount')}>
                            <div className={cx('original-price')}>{original_price}đ</div>
                            <div className={cx('percent-discount')}>-{percent_discount}%</div>
                        </div>
                    ) : <Fragment></Fragment> }

                    <div className={cx('price')}>{price}đ</div>
                    <div className={cx('extra')}>
                        <img src={Installment} alt="Logo trả góp" className={cx('img-installment')}/>
                        <p className={cx('text-installment')}>Trả góp Kredivo</p>
                    </div>

                    <div className={cx('sold')}>Đã bán {sold}</div>

                    <div className={cx('reviews-and-adress')}>
                        <div className={cx('reviews')}>
                            <div className={cx('number')}>{rate_product}/5</div>
                            <div className={cx('star')}>★</div>
                        </div>
                        <div className={cx('adress')}>{adress}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;