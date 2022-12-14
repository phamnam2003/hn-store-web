import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from "./RandomProduct.module.scss";
import ProductItem from "~/components/ProductItem";
import axios from "axios";
import { Link } from "react-router-dom";
import DotLoader  from "react-spinners/DotLoader";

const cx = classNames.bind(styles);

function RandomProduct () {
    const [rProducts, setRProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:1337/api/products?pagination[start]=0&pagination[limit]=24`)
            .then(res => {
                setRProducts(shuffle(res.data.data));
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err);
            })
    }, []);

    function shuffle (arr) {
        let index = arr.length, randomIndex;

        while (index !== 0) {
            randomIndex = Math.floor(Math.random() * index);
            index--;

            [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
        }

        return arr;
    }

    if (!isLoading) {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    { rProducts.map(product => (
                        <Link 
                            to={`/products/${product.attributes.SEOURL}`} 
                            className={cx('item-product')} key = {product.id}
                        >
                            <ProductItem 
                                img_avatar={product.attributes.img_avatar}
                                name={product.attributes.name}
                                original_price={product.attributes.original_price}
                                percent_discount={product.attributes.percent_discount}
                                price={product.attributes.price}
                                sold={product.attributes.sold}
                                rate_product={product.attributes.rate_product}
                                adress={product.attributes.adress}
                                />
                        </Link>
                    )) }
                </div>
            </div>
        )
    } else {
        return <div className={cx('wrapper')}>
            <DotLoader
                size={40}
                color={"#ee2624"}
                loading={isLoading}    
            />
        </div>
    }
}

export default RandomProduct;