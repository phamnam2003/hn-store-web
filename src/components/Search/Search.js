import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import Input from "../Input";
import styles from './Search.module.scss';

const cx = classNames.bind(styles)

function Search () {

    return (
        <div>
            <Tippy
                interactive
                visible
                offset={[0, 0]}
                placement='bottom'
                render={(attrs) => (
                    <div>Hello</div>
                )}
            >
                <div className={cx('wrapper')}>
                    <Input 
                        large 
                        placeholder="Tìm kiếm trên Store ..."

                    />
                        {/* <div className={cx('close')}>x</div> */}
                </div>
            </Tippy>
        </div>
    )
}
export default Search;