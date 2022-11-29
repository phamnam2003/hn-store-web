import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CountDown.module.scss";

const cx = classNames.bind(styles);

function CountDown ({ timerMinutes }) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(timerMinutes + 1);

    useEffect(() => {
        setTimeout(() => {
            setSeconds(seconds -1);
            if (seconds === 0) {
                setSeconds(59);
                setMinutes(minutes - 1);
                if (minutes === 0 && seconds === 0) {
                    setSeconds(0);
                    setMinutes(0);
                }
            }
        }, 1000)
    }, [seconds, minutes])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box')}>00</div>
            <div className={cx('colon')}>:</div>
            <div className={cx('box')}>{minutes}</div>
            <div className={cx('colon')}>:</div>
            <div className={cx('box')}>{seconds}</div>    
        </div>
    )
}

export default CountDown;