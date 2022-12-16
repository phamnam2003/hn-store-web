import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";
import DotLoader from 'react-spinners/DotLoader';

import styles from "./GenuineBrands.module.scss";
import SlideShow from "../SlideShow";

const cx = classNames.bind(styles);

function GenuineBrands () {
    const [brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:1337/api/genuine-brands')
            .then(res => {
                setBrands(res.data.data);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err);
            })
    }, [])

    if (!isLoading) {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('top')}>
                        <p className={cx('title')}>Thương hiệu chính hãng</p>
                        <p className={cx('see-all')}>Xem tất cả</p>
                    </div>
    
                    <div className={cx('middle')}>
                        <SlideShow />
                    </div>
    
                    <div className={cx('bottom')}>
                        { brands.map(brand => (
    
                            <div className={cx('card-genuine')} key={brand.id}>
                                <img className={cx('img-brand')} src={brand.attributes.img_product} alt={brand.attributes.voucher} />
                                <p className={cx('discount')}>
                                    {brand.attributes.voucher}
                                </p>
                            </div>
    
                        )) }
                    </div>
                </div>
            </div>
        )
    } else {
        return <div className={cx('wrapper')}>
            <div className={cx('loading')}>
                <DotLoader 
                    size={40}
                    color={"#ee2624"}
                    loading={isLoading}
                />
            </div>
        </div>
    }
}

export default GenuineBrands;