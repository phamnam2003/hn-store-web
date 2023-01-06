import classNames from "classnames/bind";
import { Fragment } from "react";

import styles from "./StoreInfo.module.scss";
import ShopPlus from "~/assets/image/ShopPlus.png";
import Button from "~/components/Button";
import { FollowIcon, StoreIcon, TelephoneIcon } from "../Icons";

const cx = classNames.bind(styles);

const SUGGEST_PRODUCT = [
    {
        img: 'https://media3.scdn.vn/img4/2022/06_20/YwUQbV2oATaKYxxBL2Su.png', 
        title: "Đầm Cát Hàn nữ",
        price: "109.000đ"
    },
    {
        img: "https://media3.scdn.vn/img3/2019/10_16/jIyJ9g.jpg", 
        title: "Đầm đuôi cá dễ thương",
        price: "120.000đ"
    },
    {
        img: "https://media3.scdn.vn/img3/2019/10_16/mbUab3.jpg", 
        title: "Đầm nữ ôm Cát Hàn",
        price: "150.000đ"
    }
]

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
                        <div className={cx('title-bottom')}>Gợi ý thêm từ Shop</div>
                        <div className={cx('suggest-product')}>
                            { SUGGEST_PRODUCT.map((product, index) => (
                                <div className={cx('card-product')} key={index}>
                                    <img src={product.img} alt={product.title} className={cx('img-product')}/>
                                    <div className={cx('info')}>
                                        <p className={cx('name-product')}>{product.title}</p>
                                        <p className={cx('price')}>{product.price}</p>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                </Fragment>                          
            )) }
        </div>
    )
}

export default StoreInfo;