// main.js
import RecipeCalculator from "../utils/recipeCalculator";
import {
  hydrationSelectOptions,
  pizzaSelectOptions,
  wheightSelectOptions,
  yeastSelectOptions,
} from "../utils/selectOptions";
import { RecipeFormData, RecipeResultData } from "../utils/types";

const form = document.getElementById("recipe-form");

const flourAmount = document.getElementById("flour-amount");
const waterAmount = document.getElementById("water-amount");
const saltAmount = document.getElementById("salt-amount");
const yeastAmount = document.getElementById("yeast-amount");

// Obtener referencias a los elementos select existentes
const pizzasSelect = document.getElementById(
  "pizzas-select"
) as HTMLSelectElement;
const weightSelect = document.getElementById(
  "weight-select"
) as HTMLSelectElement;
const hydrationSelect = document.getElementById(
  "hydration-select"
) as HTMLSelectElement;
const yeastSelect = document.getElementById(
  "yeast-select"
) as HTMLSelectElement;

// Llenar los select con las opciones generadas por las funciones
pizzaSelectOptions(pizzasSelect);
wheightSelectOptions(weightSelect);
hydrationSelectOptions(hydrationSelect);
yeastSelectOptions(yeastSelect);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Capturar los valores ingresados por el usuario
  const formData: RecipeFormData = {
    pizzas: Number(pizzasSelect.value),
    weight: Number(weightSelect.value),
    hydration: Number(hydrationSelect.value),
    yeastType: yeastSelect.value as "fresh" | "dry",
  };

  // Crear una instancia de la clase RecipeCalculator
  const recetaCalculator = new RecipeCalculator();

  // Calcular los resultados
  const result: RecipeResultData = recetaCalculator.calculateRecipe(formData);

  // Mostrar resultados
  flourAmount.textContent = `Harina: ${result.flour} g`;
  waterAmount.textContent = `Agua: ${result.water} ml`;
  saltAmount.textContent = `Sal: ${result.salt} g`;
  yeastAmount.textContent = `Levadura: ${result.yeast} g`;
});
