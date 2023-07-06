// Obtener elementos del form y contenedor del result
const form = document.getElementById("recipe-form");

const pizzasSelect = document.getElementById("pizzas-select");
const weightSelect = document.getElementById("weight-select");
const hydrationSelect = document.getElementById("hydration-select");
const yeastSelect = document.getElementById("yeast-select");

const flourAmount = document.getElementById("flour-amount");
const waterAmount = document.getElementById("water-amount");
const saltAmount = document.getElementById("salt-amount");
const yeastAmount = document.getElementById("yeast-amount");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Capturar los valores ingresados por el usuario
  let pizzas = pizzasSelect.value;
  let weight = weightSelect.value;
  let hydration = hydrationSelect.value;
  let yeastType = yeastSelect.value;

  let yeastOption = yeastType === "fresh" ? 5 : 5 / 3;

  // Realizar las operaciones necesarias
  let flour = (weight * pizzas) / hydration;
  let water = weight * pizzas - flour;
  let salt = (flour * 10) / 1000;
  let yeast = (flour * yeastOption) / 1000;

  // Mostrar resultados
  flourAmount.textContent = `Harina: ${Math.round(flour)} g`;
  waterAmount.textContent = `Agua: ${Math.round(water)} ml`;
  saltAmount.textContent = `Sal: ${Math.round(salt)} g`;
  yeastAmount.textContent = `Levadura: ${yeast.toFixed(2)} g`;
});
