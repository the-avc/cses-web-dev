import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useImages } from "./use-images";
import { ImageList, Box, useMediaQuery } from "@mui/material";
import styles from "./Gallery.module.scss";
import HorizontalScroll from "@/components/horizontal-scroll/HorizontalScroll";
import Image from "./Image";
import Navbar from "@/components/landing/Navbar";

function Images() {
  const { currentPath } = useOutletContext();
  const { tags, images, filterImagesByCategory } = useImages();
  const [filterTag, setFilterTag] = useState(currentPath);

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const getCols = () => {
    if (isSmallScreen) return 1;
    if (isMediumScreen) return 2;
    return 4;
  };

  const handleYearChange = (tag) => {
    setFilterTag(tag);
    filterImagesByCategory(tag);
  };

  useEffect(() => {
    if (tags.length > 0) {
      filterImagesByCategory(filterTag);
    }
  }, [filterTag, filterImagesByCategory, tags]);

  return (
    <>
      <Navbar navItems={[]} />
      <div className={styles.gallery}>
        <HorizontalScroll
          years={tags}
          onYearChange={handleYearChange}
          activeYear={filterTag}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          <ImageList
            sx={{ width: "100%", maxWidth: 1440 }}
            variant="masonry"
            cols={getCols()}
            gap={8}
          >
            {images?.map((item, index) => (
              <Image key={index} item={item} index={index} />
            ))}
          </ImageList>
        </Box>
      </div>
    </>
  );
}

export default Images;