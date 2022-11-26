import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { MoreIcon, ShirtIcon, SkirtIcon } from "~/components/Icons";
import Menu  from "~/components/Popper/Menu";
import styles from "./ProductType.module.scss";
import ProductTypeItem from "~/components/ProductTypeItem";

const cx = classNames.bind(styles);

function ProductType () {
    return (
        <div className={cx('wrapper')}>
            <Tippy 
                interactive
                offset={[35, 15]}
                visible
                placement='bottom'
                render={attrs => (
                    <div {...attrs}>
                        <Menu>
                            <ProductTypeItem icon={<SkirtIcon/>} leftTitle='Thời trang nữ' />
                            <ProductTypeItem icon={<ShirtIcon/>} leftTitle='Thời trang nam' />
                        </Menu>
                </div>
                )}
            >
                <div className={cx('content')}>
                    <MoreIcon/>
                </div>
            </Tippy>
        </div>
    );
}

export default ProductType;