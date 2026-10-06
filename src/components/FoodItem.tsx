import type { FoodType } from "@/types/food";

type FoodItemProps = {
  food: FoodType;
};

function FoodItem({ food }: FoodItemProps) {
  const { image, title, category, price, calory } = food;

  return (
    <li className="flex flex-col rounded-xl bg-white">
      <figure>
        <img
          src={image}
          alt={title}
          width="512"
          height="512"
          className="aspect-square object-cover rounded-t-xl"
        />
      </figure>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-col items-start gap-2">
          <span className="inline-flex justify-center items-center py-1 px-3 rounded-full bg-gray-200 text-sm font-bold">
            {category}
          </span>
          <h6 className="text-2xl">{title}</h6>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-bold text-2xl">${price}</span>

          <span className="bg-green-600 text-green-100 rounded-xl flex justify-center items-center py-1 px-2 text-sm font-semibold">
            {calory}Kcal
          </span>
        </div>
      </div>
    </li>
  );
}

export default FoodItem;
