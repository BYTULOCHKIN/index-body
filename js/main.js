"use sctrict";

// CONST

const indexForm = document.querySelector(".index-form"),
  inputHeight = indexForm.querySelectorAll("input[name]")[0],
  inputWeight = indexForm.querySelectorAll("input[name]")[1],
  inputBtn = indexForm.querySelector("#button");

const indexResult = document.createElement("div");

//EVENT LISTENER
inputBtn.addEventListener("click", () => {
  indexCalc(inputHeight.value, inputWeight.value);
});
document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    indexCalc(inputHeight.value, inputWeight.value);
  }
});

// FUNCTIONS
function indexCalc(height, weight) {
  if (height > 250 || weight > 300 || height == "" || weight == "") {
    alert("Введите настоящие данные!");
    inputHeight.value = "";
    inputWeight.value = "";
    return;
  }
  let heightM = height / 100;
  let res = weight / (heightM * heightM);
  res = Math.floor(res);

  indexResult.innerHTML = `<p> Индекс массы вашего тела равен: ${res}.`;
  indexForm.appendChild(indexResult);

  inputHeight.value = "";
  inputWeight.value = "";
  return;
}
