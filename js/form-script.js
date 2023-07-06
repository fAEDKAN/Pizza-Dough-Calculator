// Select de cantidad de pizzas
const pizzas = document.getElementById("pizzas-select");

for (let i = 1; i <= 20; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  pizzas.appendChild(option);
}

// Select de peso del bollo
const weight = document.getElementById("weight-select");

for (let i = 230; i <= 450; i += 20) {
  let option = document.createElement("option");
  option.value = i;
  option.textContent = `${i}g`;
  weight.appendChild(option);
}

// Select de hidratación
const hydration = document.getElementById("hydration-select");

for (let i = 50; i <= 100; i += 5) {
  let option = document.createElement("option");
  let percentage = i / 100;
  option.value = percentage;
  option.textContent = `${i}%`;
  hydration.appendChild(option);
}
