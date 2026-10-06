import categoryList from "@/data/categories.json";

function getCategories() {
  return [{ id: 0, title: "All" }, ...categoryList];
}

export { getCategories };
