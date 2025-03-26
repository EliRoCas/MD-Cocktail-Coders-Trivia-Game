import { useState } from "react";

const useSelectedCategory = (initialCategory) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  return {
    selectedCategory,
    setSelectedCategory,
  };
};

export default useSelectedCategory;