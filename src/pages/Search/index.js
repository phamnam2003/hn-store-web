import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import Button from "~/components/Button";
import config from "~/config";
import styles from "./SearchPage.module.scss";

const cx = classNames.bind(styles);

function Search () {
    const [products, setProducts] = useState([]);
    const location = useLocation();

    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);


    const [keyword, setKeyword] = useState(searchParams.get("keyword")); 
    

    useEffect(() => {
        axios.get(`http://localhost:1337/api/products?filters[name][$containsi]=${keyword}`)
            .then(res => setProducts(res.data.data))
            .catch(err => console.log(err))
    }, [keyword]);

    useEffect(() => {
        setKeyword(searchParams.get("keyword"))
        // eslint-disable-next-line
    }, [location])

    return (
        <div className={cx('wrapper')}>
           <div className={cx('inner')}>
                <div className={cx('title')}>
                    <div className={cx('top')}>
                        <Link to={config.routes.home} className={cx('back-home')}>
                            HN STORE
                        </Link>
                        <p className={cx('slash')}>/</p>
                        <p className={cx('page')}>Kết quả tìm kiếm</p>
                    </div>
                    <div className={cx('bottom')}>
                        <p className={cx('content-search')}>{keyword}</p>
                        <p className={cx('page')}>Tìm thấy được {products.length} kết quả</p>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('filter')}>
                        <div className={cx('container')}>
                            <p className={cx('topic')}>Địa điểm</p>
                            <div className={cx('body')}>
                                <input type='checkbox' id='hanoi' className={cx('check-box-adress')} />
                                <label  htmlFor='hanoi' className={cx('adress')}>Hà Nội</label>
                            </div>

                            <div className={cx('body')}>
                                <input type='checkbox' id='hcm' className={cx('check-box-adress')} />
                                <label htmlFor='hcm' className={cx('adress')}>Hồ Chí Minh</label>
                            </div>

                            <div className={cx('body')}>
                                <input type='checkbox' id='tb' className={cx('check-box-adress')} />
                                <label htmlFor='tb' className={cx('adress')}>Thái Bình</label>
                            </div>

                            <div className={cx('body')}>
                                <input type='checkbox' id='tq' className={cx('check-box-adress')} />
                                <label htmlFor='tq' className={cx('adress')}>Tuyên Quang</label>
                            </div>

                            <div className={cx('body')}>
                                <input type='checkbox' id='hp' className={cx('check-box-adress')} />
                                <label htmlFor='hp' className={cx('adress')}>Hải Phòng</label>
                            </div>
                        </div>

                        <div className={cx('container')}>
                            <p className={cx('topic')}>Loại Shop</p>
                            <div className={cx('body')}>
                                <input type='checkbox' id='senmalll' className={cx('check-box-adress')} />
                                <label htmlFor='senmall' className={cx('adress')}>Sen Mall</label>
                            </div>
                            <div className={cx('body')}>
                                <input type='checkbox' id='shopplus' className={cx('check-box-adress')} />
                                <label htmlFor='shopplus' className={cx('adress')}>Shop +</label>
                            </div>
                            <div className={cx('body')}>
                                <input type='checkbox' id='safe' className={cx('check-box-adress')} />
                                <label htmlFor='safe' className={cx('adress')}>Shop uy tín</label>
                            </div>
                        </div>

                        <div className={cx('container')}>
                            <p className={cx('topic')}>Khoảng giá</p>
                            <div className={cx('content-filter-price')}>
                                <div className={cx('price-range')}>
                                    <div className={cx('minimum-price')}>
                                        <p className={cx('title-price')}>Thấp nhất</p>
                                        <input type="number" className={cx('input-price')} />
                                    </div>
                                    <div className={cx('maximum-price')}>
                                        <p className={cx('title-price')}>Cao nhất</p>
                                        <input type="number" className={cx('input-price')} />
                                    </div>
                                </div>

                                <Button primary>Áp dụng</Button>
                                <button className={cx('suggest-price-filter')}>Dưới 80k</button>
                                <button className={cx('suggest-price-filter')}>80k - 100k</button>
                                <button className={cx('suggest-price-filter')}>100k - 300k</button>
                                <button className={cx('suggest-price-filter')}>300k - 400k</button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('result-search')}>
                        
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Search;