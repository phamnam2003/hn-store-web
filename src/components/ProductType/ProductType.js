import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { MoreIcon } from "../Icons";
import { Wrapper as PopperWrapper } from "../Popper";
import styles from "./ProductType.module.scss";

const cx = classNames.bind(styles);

function ProductType () {
    return (
        <div className={cx('wrapper')}>
            <Tippy 
                interactive
                offset={[0, 0]}
                placement='bottom'
                render={attrs => (
                <div className={cx('support-extra')} {...attrs}>
                    <PopperWrapper>
                        <div className={cx('qr-code')}>
                            <img className={cx('qr-img')} src='https://media3.scdn.vn/img2/2018/5_23/R842FO.png' alt='QR Code'/>
                        </div>
                        <div className={cx('qr-title')}>Quét để tải ứng dụng</div>
                    </PopperWrapper>
                </div>
                )}
            >
                <MoreIcon/>
            </Tippy>
        </div>
    );
}

export default ProductType;