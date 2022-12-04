import classNames from "classnames/bind";

import styles from "./ChangeAmount.module.scss";
import Button from "~/components/Button";
import Input from "~/components/Input";
import { LessIcon, AddIcon } from "../Icons";
import { useRef, useState } from "react";

const cx = classNames.bind(styles);

function ChangeAmount () {
    const [inputValue, setInputValue] = useState(1);

    const inputRef = useRef();

    const handleInput = (e) => {
        setInputValue(e.target.value)
        if (e.target.value > 100) {
            setInputValue(100);
        }
        if (e.target.value && e.target.value < 1) {
            setInputValue(1);
        }
    }

    const handleDecrease = () => {
        if (inputValue !== 1) {
            setInputValue(inputValue - 1)
        }
    }

    const handleIncrease = () => {
        if (inputValue < 100) {
            setInputValue(inputValue + 1)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <Button action hover onClick={handleDecrease}><LessIcon/></Button>
            <Input 
                smallest
                ref={inputRef}
                value={inputValue}
                maxLength={3}
                onChange={handleInput}
                />
            <Button action hover onClick={handleIncrease}><AddIcon/></Button>
        </div>
    )
}

export default ChangeAmount;