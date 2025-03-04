import { useEffect, useState, useCallback } from "react";
import axiosInstance from "@/api/axiosInstance";

export function useImages() {
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);

  const fetchImages = async () => {
    const { data } = await axiosInstance.get("gallery/categories");
    if (data) {
      setTags(["ALL", ...data.map((category) => category.name)]);
    }

    const { data: imagesData } = await axiosInstance.get("gallery/images");
    if (imagesData) {
      setAllImages(imagesData.data);
      setImages(imagesData.data);
    }
  };

  const filterImagesByCategory = useCallback(async (category) => {
    if (category === "ALL") {
      const { data: imagesData } = await axiosInstance.get(
        "gallery/images/category"
      );
      if (imagesData) {
        setImages(imagesData.data);
      }
    } else {
      const { data: imagesData } = await axiosInstance.get(
        `gallery/images/category/${category}`
      );
      if (imagesData) {
        setImages(imagesData.data);
      }
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    if (initialLoad && tags.length > 0) {
      filterImagesByCategory("ALL");
      setInitialLoad(false);
    }
  }, [tags, initialLoad, filterImagesByCategory]);

  return { tags, images, filterImagesByCategory };
}
