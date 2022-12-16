import classNames from "classnames/bind";
import styles from "./RecommendCategory.module.scss";

import { useEffect, useState } from "react";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";

const cx = classNames.bind(styles);

function RecommendCategory () {
    const [recommendCategories, setRecommendCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:1337/api/recommend-categories')
            .then(res => {
                setRecommendCategories(res.data.data);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err)
            })
    }, [])

    if (!isLoading) {
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
    } else {
        return (
            <div className={cx('wrapper', 'loading')}>
                <DotLoader 
                    size={40}
                    color={"#ee2624"}
                    loading={isLoading}
                />
            </div>
        )
    }
}

export default RecommendCategory;