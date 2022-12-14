import classNames from "classnames/bind";
import { Fragment } from "react";

import { ArrowIcon } from "../Icons";
import styles from './ProductTypeItem.module.scss';

const cx = classNames.bind(styles);

function ProductTypeItem ({ icon, leftTitle, middleTitle, rightTitle }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('icon')}>
                    {icon}
                </div>
                <div className={cx('title')}>
                    <p className={cx('text')}>{leftTitle}</p>
                    {middleTitle ? (
                        <Fragment>
                            <p className={cx('cross')}> - </p>
                            <p className={cx('text')}>{middleTitle}</p>
                        </Fragment>
                    ) : (
                        <Fragment></Fragment>
                    )}

                    {rightTitle ? (
                        <Fragment>
                            <p className={cx('cross')}> - </p>
                            <p className={cx('text')}>{rightTitle}</p>
                        </Fragment>
                    ) : (
                        <Fragment></Fragment>
                    )}
                </div>
            </div>
            <div className={cx('arrow')}>
                <ArrowIcon />
            </div>
        </div>
    )
}

export default ProductTypeItem;