import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

import Input from "../Input";
import styles from './Search.module.scss';
import PopperSearch from "~/components/Popper/PopperSearch";
import SearchItem from "../SearchItem";

const cx = classNames.bind(styles)

function Search () {
    const [valueInput, setValueInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:1337/api/products?filters[name][$containsi]=${valueInput}`)
            .then(res => setSearchResult(res.data.data))
            .catch(err => console.log(err))
    }, [valueInput])

    const inputRef = useRef();

    const handleDelete = () => {
        setValueInput('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    return (
        <div>
            <Tippy
                interactive
                visible = {showResult && searchResult.length > 0}
                offset={[2, 2]}
                placement='bottom'
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <PopperSearch>
                            {searchResult.map(item => (
                                <SearchItem data={item} key={item.id}/>
                            ))}
                        </PopperSearch>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('wrapper')}>
                    <Input 
                        ref={inputRef}
                        large
                        placeholder="Tìm kiếm trên Store ..."
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    {valueInput && <div className={cx('close')} onClick={handleDelete}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </div>}
                </div>
            </Tippy>
        </div>
    )
}
export default Search;