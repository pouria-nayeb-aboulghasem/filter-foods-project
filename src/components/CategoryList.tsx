import { getCategories } from "@/services/categoryService";
import { useState } from "react";
import CategoryItem from "./CategoryItem";
import type { FoodType } from "@/types/food";
import { filterFoodsByCategory, getFoods } from "@/services/foodService";

type CategoryListProps = {
  setFoodList: React.Dispatch<React.SetStateAction<FoodType[]>>;
};

function CategoryList({ setFoodList }: CategoryListProps) {
  const [categoryList] = useState(getCategories());
  const [activeCategory, setActiveCategory] = useState("All");

  function handleCategoryChange(category: string) {
    if (category === "All") {
      setFoodList(getFoods());
      setActiveCategory("All");

      return;
    }

    setFoodList(filterFoodsByCategory(category));
    setActiveCategory(category);
  }

  return (
    <div className="container mx-auto px-4 my-4">
      <ul className="flex items-center gap-4">
        {categoryList.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            isCategoryActive={category.title === activeCategory}
            handleCategoryChange={handleCategoryChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
