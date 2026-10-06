import { useState } from "react";
import CategoryList from "@/components/CategoryList";
import { getFoods } from "@/services/foodService";
import FoodList from "./components/FoodList";
import type { FoodType } from "./types/food";

function App() {
  const [foodList, setFoodList] = useState<FoodType[]>(getFoods());

  return (
    <>
      <CategoryList setFoodList={setFoodList} />
      <FoodList foodList={foodList} />
    </>
  );
}

export default App;
