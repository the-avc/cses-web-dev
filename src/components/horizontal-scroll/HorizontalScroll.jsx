import { useState, useEffect, useRef } from "react";
import styles from "./HorizontalScroll.module.scss";

const HorizontalScroll = ({ years, onYearChange, activeYear }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const lowerActiveYear = activeYear.toLowerCase();
    const index = years.findIndex(
      (year) => year.toLowerCase() === lowerActiveYear
    );

    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [activeYear, years]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    onYearChange(years[index]);
  };

  const getTranslateValue = () => {
    const itemWidth = 10;
    const containerWidth = 100;
    const offset = containerWidth / 2 - itemWidth / 2 - activeIndex * itemWidth;
    return `translate3d(${offset}vw, 0, 0)`;
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft -= x - startX;
    setStartX(x);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className={styles.contentWrapper}
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <ul
        className={styles.scrollContainer}
        role="menu"
        style={{ transform: getTranslateValue() }}
      >
        {years.map((year, index) => (
          <li
            key={`year-${index}`}
            className={`${styles.scrollItem} ${
              index === activeIndex ? styles.active : ""
            }`}
            role="menuitem"
            tabIndex="0"
            aria-label={year}
            onClick={() => handleItemClick(index)}
          >
            <span>{year.toUpperCase()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HorizontalScroll;
