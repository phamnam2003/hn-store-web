import classNames from "classnames/bind";
import styles from "./RecommendCategory.module.scss";

import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function RecommendCategory () {
    const [recommendCategories, setRecommendCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1337/api/recommend-categories')
            .then(res => setRecommendCategories(res.data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                { recommendCategories.map(item => (
                    <div className={cx('item')} key={item.id}>
                        <img src={item.attributes.icon_src} alt={item.attributes.title} className={cx('icon')}/>
                        <p className={cx('title')}>{item.attributes.title}</p>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default RecommendCategory;