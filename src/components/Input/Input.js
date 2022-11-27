import classNames from "classnames/bind";
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input ({ placeholder, small = false, medium = false, large = false, className, ...passProps }) {

    const classes = cx('wrapper', {
        small, 
        large,
        medium,
        [className]: className
    })
    return (
        <input placeholder={placeholder} className={classes} spellCheck={false} {...passProps}/>
    )
}

export default Input;