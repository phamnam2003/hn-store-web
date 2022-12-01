import classNames from "classnames/bind";

import styles from "./SlideShow.module.scss";
import SlideShow1 from "~/assets/image/SlideShow1.jpg";
import SlideShow2 from "~/assets/image/SlideShow2.jpg";
import { useState, useEffect, useRef } from "react";

const cx = classNames.bind(styles);
const SRC_IMG = [
    {
        id: 0,
        src: SlideShow1
    },
    {
        id: 1,
        src: SlideShow2
    }
];
const timeDelay = 5500;

function SlideShow () {
    const [index, setIndex] = useState(0);
    const timeOutRef = useRef(null);

    function resetTimeOut () {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
    }

    useEffect(() => {
        resetTimeOut();

        timeOutRef.current = setTimeout(() => {
            setIndex(prevIndex => 
                prevIndex === SRC_IMG.length - 1 ? 0 : prevIndex + 1
            )
        }, timeDelay);

        return () => {
            resetTimeOut();
        }
    }, [index]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')} 
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                { SRC_IMG.map((img) => (
                    <img className={cx('img-slide')} src={img.src} alt='Slideshow' key={img.id}/>
                )) }

            </div>

            <div className={cx('dots')}>
                { SRC_IMG.map((img) => (
                    <div className={cx('slideshowDot', `${index === img.id ? "active" : ""}`)} 
                        key={img.id}
                    ></div>
                )) }
            </div>
        </div>
    )
}

export default SlideShow;