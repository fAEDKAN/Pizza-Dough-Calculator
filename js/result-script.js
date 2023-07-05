// Obtener elementos del form y contenedor del result
const form = document.getElementById("hydration-form");
const flourInput = document.getElementById("flour-input");
const hydrationSelect = document.getElementById("hydration-select");
const resultContainer = document.getElementById("result-container");
const waterAmount = document.getElementById("water-amount");
const errorMessage = document.getElementById("error-message");

// Agregar evento "submit" al form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener valores ingresados por el usuario
  let flourAmount = parseFloat(flourInput.value);
  let hydration = parseFloat(hydrationSelect.value);

  // Verificar si los campos están vacíos
  if (!flourAmount || !hydration) {
    errorMessage.textContent = "Por favor, completá todos los campos!";
    return; // Detener la ejecución si están vacíos
  }

  // Limpiar mensaje de error
  errorMessage.textContent = "";

  // Calcular cantidad de agua
  let water = flourAmount * hydration;

  // Mostrar resultado en contenedor
  waterAmount.textContent = `Cantidad de Agua Necesaria: ${water} ml.`;

  // Limpiar campos del form
  flourInput.value = flourAmount;
  hydrationSelect.value = hydration;
});
