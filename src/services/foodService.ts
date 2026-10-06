import foodList from "@/data/foods.json";
import { textFormat } from "@/utils/textFormatter";

function filterFoodsByCategory(category: string) {
  return foodList.filter(
    (food) => textFormat(food.category) === textFormat(category),
  );
}

function getFoods() {
  return foodList;
}

export { getFoods, filterFoodsByCategory };
