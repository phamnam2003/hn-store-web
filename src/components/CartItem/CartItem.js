import classNames from "classnames/bind";
import Button from "../Button";
import ChangeAmount from "../ChangeAmount";
import { ArrowIcon, ChatIcon, GarbageIcon, HeartIcon, VoucherIcon } from "../Icons";
import Input from "../Input";

import styles from "./CartItem.module.scss";

const cx = classNames.bind(styles);

function CartItem ({ shop_icon, shop_name, img_avatar, name , size, color, original_price, price }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <div className={cx('info-shop')}>
                    <img src={shop_icon} alt={shop_name}/>
                    <p className={cx('shop-name')}>{shop_name}</p>
                </div>
                <Button className={cx('btn-action')}>
                    <ChatIcon/>
                    <p className={cx('chat-shop')}>Chat với Shop</p>
                </Button>
            </div>
            <div className={cx('middle')}>
                <Input type="checkbox"/>
                <div className={cx('info-product')}>
                    <img src={img_avatar} alt={name} className={cx('product-img')} />
                    <div className={cx('info')}>
                        <div className={cx('payment-method')}>Mua trước trả sau</div>
                        <p className={cx('name-product')}>{name}</p>
                        <div className={cx('size-and-color')}>
                            <p className={cx('size')}>{size}</p>
                            <p className={cx('color')}>{color}</p>
                        </div>
                    </div>
                </div>
                <div className={cx('money')}>
                    <p className={cx('price')}>{price}</p>
                    <p className={cx('original-price')}>{original_price}</p>
                </div>
                <ChangeAmount/>
                <div className={cx('action')}>
                    <Button className={cx('btn-action')}><HeartIcon/></Button>
                    <Button className={cx('btn-action')}><GarbageIcon/></Button>
                </div>
            </div>
            <div className={cx('bottom')}>
                <VoucherIcon/>
                <p className={cx('voucher-shop')}>Mã giảm giá của Shop (2)</p>
                <ArrowIcon/>
            </div>
        </div>
    )
}

export default CartItem;