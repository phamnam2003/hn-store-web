import classNames from "classnames/bind";
import styles from "./RecommendCategory.module.scss";

import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function RecommendCategory () {
    const [recommendCategories, setRecommendCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1337/api/recommend-categories')
            .then(res => console.log(res.data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={cx('wrapper')}>
            RecommendCategory
        </div>
    )
}

export default RecommendCategory;