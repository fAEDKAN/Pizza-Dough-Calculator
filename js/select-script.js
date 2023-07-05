const select = document.getElementById("hydration-select");

for (let i = 40; i <= 100; i += 10) {
  let option = document.createElement("option");
  let percentage = i / 100;
  option.value = percentage;
  option.textContent = i + "%";
  select.appendChild(option);
}