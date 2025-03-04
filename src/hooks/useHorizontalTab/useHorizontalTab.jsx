import { useState, useEffect, useRef } from 'react';
import TabList from './TabList';
import ScrollContent from './ScrollContent';
import styles from './HorizontalScroll.module.scss';

const useHorizontalTab = (data) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const HorizontalScroll = () => {
    useEffect(() => {
      const itemWidth = 6;
      const targetScrollPosition = activeIndex * itemWidth;
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: targetScrollPosition,
          behavior: 'smooth',
        });
      }
    }, [activeIndex]);

    return (
      <>
        <TabList
          data={data}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setActiveIndex={setActiveIndex}
        />
        <ScrollContent
          data={data}
          activeTab={activeTab}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrollRef={scrollRef}
        />
      </>
    );
  };

  return {
    HorizontalScroll,
    activeTab,
    activeIndex: Object.keys(data[activeTab]['data'])[activeIndex],
  };
};

export default useHorizontalTab;
