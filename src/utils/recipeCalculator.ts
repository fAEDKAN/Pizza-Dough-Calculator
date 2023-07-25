import { RecipeFormData, RecipeResultData } from "./types";

class RecipeCalculator {
  calculateRecipe({
    pizzas,
    weight,
    hydration,
    yeastType,
  }: RecipeFormData): RecipeResultData {
    let yeastOption = yeastType === "fresh" ? 5 : 5 / 3;

    let flour = (weight * pizzas) / hydration;
    let water = weight * pizzas - flour;
    let salt = (flour * 10) / 1000;
    let yeast = (flour * yeastOption) / 1000;

    return {
      flour: Math.round(flour),
      water: Math.round(water),
      salt: Math.round(salt),
      yeast: Number(yeast.toFixed(2)),
    };
  }
}

export default RecipeCalculator;
