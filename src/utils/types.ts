export interface RecipeFormData {
  pizzas: number;
  weight: number;
  hydration: number;
  yeastType: "fresh" | "dry";
}

export interface RecipeResultData {
  flour: number;
  water: number;
  salt: number;
  yeast: number;
}