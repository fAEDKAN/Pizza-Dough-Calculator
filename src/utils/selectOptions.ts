// Select de cantidad de pizzas
export function pizzaSelectOptions(pizzasSelect) {
  for (let i = 1; i <= 20; i++) {
    let option = document.createElement("option");
    option.value = i.toString();
    option.textContent = i.toString();
    pizzasSelect.appendChild(option);
  }
  return pizzasSelect;
}

// Select de peso del bollo
export function wheightSelectOptions(weightSelect) {
  for (let i = 230; i <= 450; i += 10) {
    let option = document.createElement("option");
    option.value = i.toString();
    option.textContent = i.toString();
    weightSelect.appendChild(option);
  }
  return weightSelect;
}

// Select de hidratación
export function hydrationSelectOptions(hydrationSelect) {
  for (let i = 50; i <= 100; i += 5) {
    let option = document.createElement("option");
    let percentage = i / 100 + 1;
    option.value = percentage.toString();
    option.textContent = i.toString();
    hydrationSelect.appendChild(option);
  }
  return hydrationSelect;
}

// Select de levadura
export function yeastSelectOptions(yeastSelect) {
  let freshOption = document.createElement("option");
  freshOption.value = "fresh";
  freshOption.textContent = "Levadura Fresca";
  yeastSelect.appendChild(freshOption);

  let dryOption = document.createElement("option");
  dryOption.value = "dry";
  dryOption.textContent = "Leadura Seca";
  yeastSelect.appendChild(dryOption);

  return yeastSelect;
}
