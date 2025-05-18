const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");
const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", () => {
  const weight = parseFloat(weightInput.value);
  const heightCm = parseFloat(heightInput.value);
  
  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    resultDiv.textContent = "Please enter valid values.";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const roundedBMI = bmi.toFixed(1);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  resultDiv.textContent = `Your BMI is ${roundedBMI} (${category})`;
});
