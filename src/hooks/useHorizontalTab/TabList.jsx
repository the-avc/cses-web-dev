import React from 'react';
import styles from './HorizontalScroll.module.scss';

const TabList = ({ data, activeTab, setActiveTab, setActiveIndex }) => {
    return (
        <div role="tablist" className={styles['tab-container']}>
            {data.map((val, index) => (
                <div
                    role="tab"
                    aria-selected={activeTab === index}
                    className={`${styles['tab-item']} ${activeTab === index ? styles['active'] : ''}`}
                    onClick={() => {
                        setActiveIndex(0);
                        setActiveTab(index);
                    }}
                    tabIndex={activeTab === index ? 0 : -1}
                    key={index}
                >
                    {val.name}
                </div>
            ))}
        </div>
    );
};

export default TabList;
