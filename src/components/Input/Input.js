import classNames from "classnames/bind";
import styles from './Input.module.scss';
import { forwardRef } from "react";

const cx = classNames.bind(styles);

function Input ({ placeholder, login = false,smallest = false, small = false, medium = false, large = false, className, ...passProps }, ref) {

    const classes = cx('wrapper', {
        login,
        smallest,
        small, 
        large,
        medium,
        ...passProps,
        [className]: className
    })
    return (
        <input ref={ref} placeholder={placeholder} className={classes} spellCheck={false} {...passProps}/>
    )
}

export default forwardRef(Input);