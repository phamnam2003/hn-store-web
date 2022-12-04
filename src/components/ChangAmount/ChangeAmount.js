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
        if (e.target.value === '') {
            setInputValue(1)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <Button action hover><LessIcon/></Button>
            <Input 
                smallest
                ref={inputRef}
                value={inputValue}
                maxLength={3}
                onChange={handleInput}
                />
            <Button action hover><AddIcon/></Button>
        </div>
    )
}

export default ChangeAmount;