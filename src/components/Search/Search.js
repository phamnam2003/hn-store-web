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
import Button from "../Button";
import { SearchIcon } from "../Icons";

const cx = classNames.bind(styles)

function Search () {
    const [valueInput, setValueInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const searchPath = !!valueInput ? `/search?keyword=${valueInput}`: '';

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

    const handleKeyEnter = (e) => {
        if (e.key === 'Enter') {
            document.getElementById('search-btn').click();
            setShowResult(false);
        }
        else setShowResult(true);
    } 

    return (
        <div>
            <Tippy
                interactive
                visible = {showResult && searchResult.length > 0}
                offset={[0, 3]}
                placement='bottom-start'
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
                        placeholder="T??m ki???m tr??n Store ..."
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        onFocus={() => setShowResult(true)}
                        onKeyPress={handleKeyEnter}
                    />
                    {valueInput && <div className={cx('close')} onClick={handleDelete}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </div>}

                    <Button id="search-btn" to={searchPath} className={cx('search-btn')} smallest>
                        <SearchIcon />
                    </Button>
                </div>
            </Tippy>
        </div>
    )
}
export default Search;