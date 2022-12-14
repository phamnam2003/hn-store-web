import classNames from "classnames/bind";

import styles from "./ShoppingProduct.module.scss";
import Button from "../Button";
import { HandleCartLoading, HandleCartSuccess, HeartIcon, InfoIcon, ShareIcon, ShieldIcon } from "../Icons";
import ShopPlus from "~/assets/image/ShopPlus.png";
import AppMobile from "~/assets/image/AppMobile.png";
import Installment from "~/assets/image/Installment.png";
import ChangeAmount from "~/components/ChangeAmount";
import { useState } from "react";
import NotificationCart from "../NotificationCart";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function ShoppingProduct ({ product }) {
    let IMG_DESC, COLOR, SIZE;

    const [showNotification, setShowNotification] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    if (product.length > 0) {
        IMG_DESC = product.map(info => info.attributes.img_desc).toString().split(",");
        COLOR = product.map(info =>  !!info.attributes.color ? info.attributes.color : "").toString().split(",");
        SIZE = product.map(info =>  !!info.attributes.size ? info.attributes.size : "").toString().split(",");
    }

    const addIntoCart = (product_id) => {
        fetch(`http://localhost:1337/api/cart/add/${product_id}`, {
            method: "GET", 
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.jwt,
                'Content-type': 'application/x-www-form-urlencoded'
            })
        })
            .then(res => res.text())
            .then(data => {
                console.log(data);
                setShowNotification(true);

                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
                setTimeout(() => {
                    setShowNotification(false);
                    
                    navigate("/cart")
                }, 2000)
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err);
            })
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
                                <div className={cx('price')}>{info.attributes.price}??</div>
                                
                                { info.attributes.original_price ? (
                                    <div className={cx('discount')}>
                                        <div className={cx('original-price')}>
                                            {info.attributes.original_price}??
                                        </div>
                                        <div className={cx('percent-discount')}>
                                            Gi???m {info.attributes.percent_discount}%
                                        </div>
                                    </div>
                                ) : <></> }

                                <div className={cx('reviews-and-sold')}>
                                    <div className={cx('star')}>??? ??? ??? ??? ???</div>
                                    <div className={cx('rate-product')}>{info.attributes.rate_product} ????nh gi??</div>
                                    <div className={cx('dot')}>???</div>
                                    <div className={cx('sold')}>{info.attributes.sold} l?????t mua</div>
                                </div>
                            </div>
            
                            <div className={cx('middle-right')}>
                                { info.attributes.color ? (
                                    <div className={cx('color')}>
                                        <div className={cx('text')}>Ch???n m??u s???c:</div>
                                        <div className={cx('content-color')}>
                                            { COLOR.map(color => (
                                                <Button size key={color}>{color}</Button>
                                            )) }
                                        </div>
                                    </div>
                                ) : <></> }
                                { info.attributes.size ? (
                                    <div className={cx('size')}>
                                        <div className={cx('text')}>Ch???n k??ch th?????c:</div>
                                        <div className={cx('content-size')}>
                                            { SIZE.map(size => (
                                                <Button size key={size}>{size}</Button>
                                            )) }
                                        </div>
                                    </div>
                                ) : <></> }
                                <div className={cx('amount')}>
                                    <div className={cx('text')}>Ch???n s??? l?????ng:</div>
                                    <div className={cx('number')}>
                                        <ChangeAmount />
                                    </div>
                                </div>
                                <div className={cx('button-action')}>
                                    <Button largest hover onClick={() => addIntoCart(info.id)}>Th??m v??o gi??? h??ng</Button>
                                    <Button primary largest>Mua ngay</Button>
                                </div>
                            </div>

                            <div className={cx('bottom-right')}>
                                <div className={cx('promotion-for-you')}>
                                    <p className={cx('title')}>
                                        ??u ????i d??nh cho b???n
                                        <InfoIcon />
                                    </p>
                                    <div className={cx('body')}>
                                        <div className={cx('content-left')}>
                                            <img src={Installment} alt="Tr??? g??p" className={cx('img-instead')} />
                                            <p className={cx('text-content')}>Tr??? g??p Kredivo</p>
                                        </div>
                                        <div className={cx('content-right')}>
                                            <img src={AppMobile} alt="App Mobile" className={cx('img-instead')} />
                                            <p className={cx('text-content')}>Gi???m khi mua qua App</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('benifit')}>
                                    <p className={cx('title')}>
                                        Quy???n l???i kh??ch h??ng
                                        <InfoIcon />
                                    </p>
                                    <div className={cx('body')}>
                                        <div className={cx('content-left')}>
                                            <ShieldIcon /> 
                                            <p className={cx('text-content')}>Mi???n ph?? ho??n tr???</p>
                                        </div>
                                        <div className={cx('content-right')}>
                                            <ShieldIcon /> 
                                            <p className={cx('text-content')}>48h ho??n tr???</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
            
            { showNotification && (
                <div className={cx('notification-cart-wrapper')}>
                    <NotificationCart 
                        content = { isLoading ? "??ang x??? l??..." : "Th??m v??o gi??? h??ng th??nh c??ng!" }
                        icon = { isLoading ? <HandleCartLoading /> : <HandleCartSuccess /> }    
                    />
                </div>
            ) }

        </div>
    )
}

export default ShoppingProduct;