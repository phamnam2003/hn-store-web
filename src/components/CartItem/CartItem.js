import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "../Button";
import ChangeAmount from "../ChangeAmount";
import { ArrowIcon, ChatIcon, GarbageIcon, HeartIcon, VoucherIcon } from "../Icons";
import Input from "../Input";

import styles from "./CartItem.module.scss";

const cx = classNames.bind(styles);

function CartItem ({ shop_icon, shop_name, img_avatar, name , size, color, original_price, price, SEOURL }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <div className={cx('info-shop')}>
                    <img src={shop_icon} alt={shop_name} className={cx('shop-icon')}/>
                    <p className={cx('shop-name')}>{shop_name}</p>
                </div>
                <Button className={cx('btn-action')}>
                    <ChatIcon/>
                    <p className={cx('chat-shop')}>Chat với Shop</p>
                </Button>
            </div>
            <div className={cx('middle')}>
                <div className={cx('buy')}>
                    <Input type="checkbox" className={cx('input-checkbox')}/>
                    <div className={cx('info-product')}>
                        <Link to={`/products/${SEOURL}`}>
                            <img src={img_avatar} alt={name} className={cx('product-img')} />
                        </Link>
                        <div className={cx('info')}>
                            <p className={cx('payment-method')}>Mua trước trả sau</p>
                            <Link to={`/products/${SEOURL}`} className={cx('name-product')}>
                                {name.toString().substring(0, 40)}...
                            </Link>
                            <div className={cx('size-and-color')}>
                                { size && <p className={cx('size')}>{size}</p> }
                                { color && <p className={cx('color')}>{color}</p> }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('money')}>
                    <p className={cx('price')}>{price}đ</p>
                    <p className={cx('original-price')}>{original_price}đ</p>
                </div>
                <div className={cx('amount')}><ChangeAmount/></div>
                <div className={cx('action')}>
                    <Button className={cx('btn-action')}><HeartIcon/></Button>
                    <Button className={cx('btn-action')}><GarbageIcon/></Button>
                </div>
            </div>
            <div className={cx('bottom')}>
                <VoucherIcon/>
                <p className={cx('voucher-shop')}>Mã giảm giá của Shop (2)</p>
                <ArrowIcon className={cx('arrow')}/>
            </div>
        </div>
    )
}

export default CartItem;