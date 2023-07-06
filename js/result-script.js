// Obtener elementos del form y contenedor del result
const form = document.getElementById("recipe-form");
const pizzasSelect = document.getElementById("pizzas-select");
const weightSelect = document.getElementById("weight-select");
const hydrationSelect = document.getElementById("hydration-select");
const yeastSelect = document.getElementById("yeast-select");
const resultContainer = document.getElementById("result-container");
const flourAmount = document.getElementById("flour-amount");
const waterAmount = document.getElementById("water-amount");
const saltAmount = document.getElementById("salt-amount");
const yeastAmount = document.getElementById("yeast-amount");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener valores ingresados por el usuario
  let pizzas = parseInt(pizzasSelect.value);
  let weight = parseInt(weightSelect.value);
  let hydration = parseInt(hydrationSelect.value);
  let yeastType = yeastSelect.value;

  // Verificar si los campos están vacíos
  if (!pizzas || !weight || !hydration || !yeastType) {
    errorMessage.textContent = "Por favor, completá todos los campos!";
    return; // Detener la ejecución si están vacíos
  }

  // Limpiar mensaje de error
  errorMessage.textContent = "";

  // Calcular receta
  let flour = (weight * pizzas) / (hydration / 100 + 1);
  let water = weight * pizzas - flour;
  let salt = (flour * 10) / 1000;
  let yeast = yeastType === "fresh-yeast" ? flour * 5 : flour * 1.66;

  // Mostrar resultado en contenedor
  flourAmount.textContent = flour;
  waterAmount.textContent = water;
  saltAmount.textContent = salt;
  yeastAmount.textContent = yeast;

  // Limpiar campos del form
  pizzasSelect.value = pizzas.toString();
  weightSelect.value = weight.toString();
  hydrationSelect.value = hydration.toString();
  yeastSelect.value = yeastType;
});
