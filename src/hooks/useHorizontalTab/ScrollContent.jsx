import React, { useRef } from 'react';
import styles from './HorizontalScroll.module.scss';

const ScrollContent = ({ data, activeTab, activeIndex, setActiveIndex, scrollRef }) => {
    const getTranslateValue = (index) => {
        const itemWidth = 6; // Adjust based on your design
        const containerWidth = 100; // Total container width
        const offset = containerWidth / 2 - itemWidth / 2 - index * itemWidth;
        return `translate3d(${offset}vw, 0, 0)`;
    };

    return (
        <div
            className={styles.contentWrapper}
            ref={scrollRef}
            onMouseDown={(e) => { /* Handle mouse down */ }}
            onMouseMove={(e) => { /* Handle mouse move */ }}
            onMouseUp={(e) => { /* Handle mouse up */ }}
            onMouseLeave={() => { /* Handle mouse leave */ }}
        >
            <ul
                className={styles.scrollContainer}
                role="menu"
                style={{ transform: getTranslateValue(activeIndex) }}
            >
                {Object.keys(data[activeTab]['data']).map((val, index) => (
                    <li
                        key={index}
                        className={`${styles.scrollItem} ${index === activeIndex ? styles.active : ''}`}
                        role="menuitem"
                        tabIndex="0"
                        aria-label={val}
                        onClick={() => setActiveIndex(index)}
                    >
                        <span>{val.toUpperCase()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScrollContent;
