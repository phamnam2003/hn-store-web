import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Input from "../Input";
import styles from './Search.module.scss';
import PopperSearch from "~/components/Popper/PopperSearch";
import SearchItem from "../SearchItem";
import { useRef, useState } from "react";

const cx = classNames.bind(styles)

function Search () {
    const [valueInput, setValueInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    // const [showResult, setShowResult] = useState(false);

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
                visible = {valueInput}
                offset={[2, 2]}
                placement='bottom'
                render={(attrs) => (
                    <div {...attrs}>
                        <PopperSearch>
                            {searchResult.map(item => (
                                <SearchItem data={item} key={item.id} />
                            ))}
                        </PopperSearch>
                    </div>
                )}
            >
                <div className={cx('wrapper')}>
                    <Input 
                        ref={inputRef}
                        large
                        placeholder="Tìm kiếm trên Store ..."
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
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