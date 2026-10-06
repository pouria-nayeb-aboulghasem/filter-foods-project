import type { CategoryType } from "@/types/category";

type CategoryItemProps = {
  category: CategoryType;
  isCategoryActive: boolean;
  handleCategoryChange: (category: string) => void;
};

function CategoryItem({
  category,
  isCategoryActive,
  handleCategoryChange,
}: CategoryItemProps) {
  const { title } = category;

  return (
    <li
      className={`py-1 px-3 category-item cursor-pointer text-gray-400 ${isCategoryActive ? "active" : ""}`}
      onClick={() => handleCategoryChange(title)}
    >
      {title}
    </li>
  );
}

export default CategoryItem;
