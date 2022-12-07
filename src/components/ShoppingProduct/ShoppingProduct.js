import classNames from "classnames/bind";

import styles from "./ShoppingProduct.module.scss";
import Button from "../Button";
import { HeartIcon, InfoIcon, ShareIcon, ShieldIcon } from "../Icons";
import ShopPlus from "~/assets/image/ShopPlus.png";
import AppMobile from "~/assets/image/AppMobile.png";
import Installment from "~/assets/image/Installment.png";
import ChangeAmount from "~/components/ChangeAmount";

const cx = classNames.bind(styles);

function ShoppingProduct ({ product }) {
    let IMG_DESC, COLOR, SIZE;

    if (product.length > 0) {
        IMG_DESC = product.map(info => info.attributes.img_desc).toString().split(",");
        COLOR = product.map(info =>  !!info.attributes.color ? info.attributes.color : "").toString().split(",");
        SIZE = product.map(info =>  !!info.attributes.size ? info.attributes.size : "").toString().split(",");
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
                                            { COLOR.map(color => (
                                                <Button size key={color}>{color}</Button>
                                            )) }
                                        </div>
                                    </div>
                                ) : <></> }
                                { info.attributes.size ? (
                                    <div className={cx('size')}>
                                        <div className={cx('text')}>Chọn kích thước:</div>
                                        <div className={cx('content-size')}>
                                            { SIZE.map(size => (
                                                <Button size key={size}>{size}</Button>
                                            )) }
                                        </div>
                                    </div>
                                ) : <></> }
                                <div className={cx('amount')}>
                                    <div className={cx('text')}>Chọn số lượng:</div>
                                    <ChangeAmount />
                                </div>
                                <div className={cx('button-action')}>
                                    <Button largest hover>Thêm vào giỏ hàng</Button>
                                    <Button primary largest>Mua ngay</Button>
                                </div>
                            </div>

                            <div className={cx('bottom-right')}>
                                <div className={cx('promotion-for-you')}>
                                    <p className={cx('title')}>
                                        Ưu đãi dành cho bạn
                                        <InfoIcon />
                                    </p>
                                    <div className={cx('body')}>
                                        <div className={cx('content-left')}>
                                            <img src={Installment} alt="Trả góp" className={cx('img-instead')} />
                                            <p className={cx('text-content')}>Trả góp Kredivo</p>
                                        </div>
                                        <div className={cx('content-right')}>
                                            <img src={AppMobile} alt="App Mobile" className={cx('img-instead')} />
                                            <p className={cx('text-content')}>Giảm khi mua qua App</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('benifit')}>
                                    <p className={cx('title')}>
                                        Quyền lợi khách hàng
                                        <InfoIcon />
                                    </p>
                                    <div className={cx('body')}>
                                        <div className={cx('content-left')}>
                                            <ShieldIcon /> 
                                            <p className={cx('text-content')}>Miễn phí hoàn trả</p>
                                        </div>
                                        <div className={cx('content-right')}>
                                            <ShieldIcon /> 
                                            <p className={cx('text-content')}>48h hoàn trả</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default ShoppingProduct;