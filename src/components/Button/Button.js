import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button ({ 
    to, 
    href, 
    primary = false, 
    normal = false,
    text = false, 
    small = false, 
    smallest = false, 
    large = false, 
    medium = false,
    disabled,
    className, 
    children, 
    onClick,
    ...passProp
    }) {
    
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
        text,
        small,
        smallest,
        large,
        medium,
        disabled,
        [className]: className
    })

    return (
        <Comp className={classes} {..._props}>
            {children}
        </Comp>
    )
}

export default Button;