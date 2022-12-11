import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { forwardRef } from "react";

const cx = classNames.bind(styles);

function Button ({ 
    to, 
    href, 
    primary = false, 
    normal = false,
    special=false,
    action=false,
    size = false,
    text = false,
    hover=false, 
    small = false, 
    smallest = false, 
    large = false, 
    largest = false,
    medium = false,
    account = false,
    disabled,
    className, 
    children, 
    onClick,
    ...passProp
    }, ref) {
    
    let Comp = 'button';
    const _props = {
        onClick,
        ...passProp
    }

    if (disabled) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key]
            }
        })
    }

    if (to) {
        _props.to = to;
        Comp = Link
    } else if (href) {
        _props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        normal,
        special,
        action,
        size,
        text,
        hover,
        small,
        smallest,
        large,
        largest,
        medium,
        disabled,
        account,
        [className]: className
    })

    return (
        <Comp className={classes} ref={ref} {..._props}>
            {children}
        </Comp>
    )
}

export default forwardRef(Button);