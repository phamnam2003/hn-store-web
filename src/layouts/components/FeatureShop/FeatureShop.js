import classNames from "classnames/bind";
import styles from './FeatureShop.module.scss';

import { useState, useEffect } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function FeatureShop () {
    const [banners, setBanner] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1337/api/footer-banners')
            .then(res => setBanner(res.data.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className={cx('wrapper')}>
            {banners.map(banner => (
                <div className={cx('banner-item')} key={banner.id}>
                    <img src={banner.attributes.img_src} alt="banner" className={cx('img')} />
                    <p className={cx('title')}>{banner.attributes.title}</p>
                    <p className={cx('description')}>{banner.attributes.description}</p>
                </div>
            ))}
        </div>
    )
}

export default FeatureShop;