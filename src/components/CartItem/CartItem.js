import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../Button";
import ChangeAmount from "../ChangeAmount";
import { ArrowIcon, ChatIcon, GarbageIcon, HeartIcon, VoucherIcon } from "../Icons";
import Input from "../Input";
import PopperCart from "../Popper/PopperCart";

import styles from "./CartItem.module.scss";

const cx = classNames.bind(styles);

function CartItem ({ id, shop_icon, shop_name, img_avatar, name , size, color, original_price, 
    price, SEOURL, reloadProduct }) {
    const jwt = localStorage.jwt;
    const sizes = size.toString().split(',');
    const colors = color.toString().split(',');

    const [currentSize, setCurrentSize] = useState(sizes[0]);
    const [lastSize, setLastSize] = useState(sizes[0]);

    const navigate = useNavigate();

    const configHeader = {
        method: "GET",
        headers: new Headers({
            Authorization: `Bearer ${jwt}`
        })
    }

    const handleRemove = (product_id) => {
        fetch(`http://localhost:1337/api/cart/remove/${product_id}`, configHeader)
            .then(res => {
                res.json();
            })
            .then(res => {
                reloadProduct();
                navigate("/cart", { replace: true });
            })
            .catch(err => console.log(err));
    } 

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
                            
                            <Tippy
                                interactive
                                trigger="click"
                                offset={[0, 7]}
                                placement="bottom"
                                render={attrs => (
                                    <div {...attrs}>
                                        <PopperCart>
                                            { size && (
                                                
                                                <div>
                                                    <div className={cx('current-size')}>
                                                        <p className={cx('title')}>Chọn kích thước:</p>
                                                        <div className={cx('content')}>{currentSize}</div>
                                                    </div>
                                                    
                                                    <div className={cx('list-size')}>
                                                        { sizes.map(size => (
                                                            <p 
                                                                key={size} 
                                                                className={cx('pick-size')} 
                                                                onClick={() => setCurrentSize(size)}
                                                            >
                                                                {size}
                                                            </p>
                                                        )) }
                                                    </div>

                                                </div>
                                                
                                            ) }
                                            { color && (
                                                
                                                <div>
                                                    <div className={cx('current-color')}>
                                                            <p className={cx('title')}>Màu sắc:</p>
                                                            <p className={cx('content')}>{colors[0]}</p>
                                                    </div>
                                                </div>

                                            ) }
                                            <div className={cx('unit-price')}>
                                                <p className={cx('title')}>Đơn giá:</p>
                                                <p className={cx('price')}>{price}đ</p>
                                            </div>
                                            <Button primary large 
                                                onClick={() => setLastSize(currentSize)}
                                            >
                                                Cập nhật
                                            </Button>
                                        </PopperCart>
                                    </div>
                                )}
                            >
                                { size || color ? (
                                    <div className={cx('size-and-color')}>
                                        { size && <p className={cx('size')}>{lastSize}</p> }
                                        { color && <p className={cx('color')}>{colors[0]}</p> }
                                    </div>
                                ) : <></> }
                            </Tippy>

                        </div>
                    </div>
                </div>
                <div className={cx('money')}>
                    <p className={cx('price')}>{price}đ</p>
                    { original_price && <p className={cx('original-price')}>{original_price}đ</p> } 
                </div>
                <div className={cx('amount')}><ChangeAmount/></div>
                <div className={cx('action')}>
                    <Tippy content = "Yêu thích">
                        <Button className={cx('btn-action')}><HeartIcon/></Button>
                    </Tippy>
                    <Tippy content = "Xóa">
                        <Button className={cx('btn-action')} onClick = {() => handleRemove(id)}><GarbageIcon/></Button>
                    </Tippy>
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