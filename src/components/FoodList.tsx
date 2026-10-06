import type { FoodType } from "@/types/food";
import FoodItem from "./FoodItem";

type FoodListProps = {
  foodList: FoodType[];
};

function FoodList({ foodList }: FoodListProps) {
  return (
    <div className="container mx-auto px-4 my-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {foodList.map((food) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
