import classNames from "classnames/bind";
import { Fragment } from "react";

import styles from "./ProductInfo.module.scss";

const cx = classNames.bind(styles);

function ProductInfo ({ product }) {
    let details;

    if (product) {
        let arr = product.map(detail => {
            return detail.attributes.detail_product.toString().split(";");
        })

        details = arr[0]
        
    }

    return (
        <div className={cx('wrapper')}>
            { product.map(info => (
                <Fragment key={info.id}>
                    <div className={cx('desc')}>
                        <p className={cx('title')}>Mô tả sản phẩm</p>
                        <p className={cx('content')}>
                            <br/>
                            { info.attributes.description.toString().substring(0,256) }...
                        </p>
                    </div>
                    <div className={cx('detail')}>
                        <p className={cx('title', 'mt-16')}>Chi tiết sản phẩm</p>
                        <div className={cx('content-detail')}>
                            { details.map((detail, index) => (
                                <Fragment key={index}>
                                    <br/>
                                    <div>{detail}</div>
                                </Fragment>
                            )) }
                        </div>
                    </div>
                </Fragment>
            )) }
        </div>
    )
}

export default ProductInfo;