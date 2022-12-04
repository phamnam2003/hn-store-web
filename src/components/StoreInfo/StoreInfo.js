import classNames from "classnames/bind";
import { Fragment } from "react";

import styles from "./StoreInfo.module.scss";
import ShopPlus from "~/assets/image/ShopPlus.png";
import Button from "~/components/Button";
import { FollowIcon, StoreIcon, TelephoneIcon } from "../Icons";

const cx = classNames.bind(styles);

function StoreInfo ({ product }) {
    return (
        <div className={cx('wrapper')}>
            { product.map(info => (
                <Fragment key={info.id}>
                    <div className={cx('top')}>
                        <div className={cx('info-shop')}>
                            <div className={cx('avatar-shop')}>
                                <img 
                                    src={info.attributes.shop_icon} 
                                    className={cx('img-avatar')}
                                    alt={info.attributes.shop_name}
                                    />
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('name')}>{info.attributes.shop_name}</div>
                                <img src={ShopPlus} alt="Shop Plus" className={cx('img-shop-plus')} />
                                <div className={cx('adress-and-reviews')}>
                                    <div className={cx('adress')}>{info.attributes.adress}</div>
                                    <div className={cx('reviews')}>
                                        <p>{info.attributes.rate_shop}</p>
                                        <div className={cx('star')}>★</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('response-shop')}>
                            <div className={cx('response')}>
                                <div className={cx('text-content')}>4 năm</div>
                                <p className={cx('title')}>Bán ở Sendo</p>
                            </div>

                            <div className={cx('response')}>
                                <div className={cx('text-content')}>9535</div>
                                <p className={cx('title')}>Sản phẩm</p>
                            </div>

                            <div className={cx('response')}>
                                <div className={cx('text-content')}>2 ngày</div>
                                <p className={cx('title')}>Chuẩn bị hàng</p>
                            </div>

                            <div className={cx('response')}>
                                <div className={cx('text-content')}>100%</div>
                                <p className={cx('title')}>Tỉ lệ phản hồi</p>
                            </div>

                            <div className={cx('response')}>
                                <div className={cx('text-content')}>Ngay</div>
                                <p className={cx('title')}>Shop phản hồi</p>
                            </div>
                        </div>

                        <div className={cx('action-shop')}>
                            <Button hover className={cx('btn-action')}>
                                <FollowIcon />
                                <p className={cx('content-btn')}>Theo dõi Shop</p>
                            </Button>
                            <Button hover className={cx('btn-action')}>
                                <StoreIcon />
                                <p className={cx('content-btn')}>Vào Shop</p>
                            </Button>
                            <Button smallest><TelephoneIcon/></Button>
                        </div>
                    </div>
                    <div className={cx('bottom')}>
                        Gợi ý thêm từ Shop
                    </div>
                </Fragment>                          
            )) }
        </div>
    )
}

export default StoreInfo;