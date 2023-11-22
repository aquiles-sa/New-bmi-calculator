const form = document.querySelector("#formu");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset-btn");

const underweight_table = document.querySelector("#underweight_table");
const normal_weight_table = document.querySelector("#normal_weight");
const overweight_table = document.querySelector("#overweight_table");

const obesity_one_table = document.querySelector("#obesity_one");
const obesity_two_table = document.querySelector("#obesity_two");
const obesity_three_table = document.querySelector("#obesity_three");

const event = (e) => {
  e.preventDefault();

  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);

  calculate_bmi(weight, height);
  result.classList.remove("opacity-0");
};

const calculate_bmi = (weight_value, height_value) => {
  const height_meters = height_value / 100;
  let bmi = (weight_value / Math.pow(height_meters, 2)).toFixed(2);

  const bmi_categories = [
    "Underweight",
    "Normal weight",
    "Overweight",
    "Obesity grade 1",
    "Obesity grade 2",
    "Obesity grade 3",
  ];

  if (bmi <= 18.5) {
    result.innerHTML = `BMI: ${bmi}kg/m<sup>2</sup> | Status: ${bmi_categories[0]}`;

    underweight_table.classList.add("underweight_bg");

    normal_weight_table.classList.remove("normalWeight_bg");
    overweight_table.classList.remove("overweight_bg");

    obesity_one_table.classList.remove("obesity_one_bg");
    obesity_two_table.classList.remove("obesity_two_bg");
    obesity_three_table.classList.remove("obesity_three_bg");
  }

  if (bmi >= 18.6 && bmi <= 24.9) {
    result.innerHTML = `BMI: ${bmi}kg/m<sup>2</sup> | Status: ${bmi_categories[1]}`;

    normal_weight_table.classList.add("normalWeight_bg");

    underweight_table.classList.remove("underweight_bg");
    overweight_table.classList.remove("overweight_bg");

    obesity_one_table.classList.remove("obesity_one_bg");
    obesity_two_table.classList.remove("obesity_two_bg");
    obesity_three_table.classList.remove("obesity_three_bg");
  }

  if (bmi >= 25 && bmi <= 29.9) {
    result.innerHTML = `BMI: ${bmi}kg/m<sup>2</sup> | Status: ${bmi_categories[2]}`;

    overweight_table.classList.add("overweight_bg");

    underweight_table.classList.remove("underweight_bg");
    normal_weight_table.classList.remove("normalWeight_bg");

    obesity_one_table.classList.remove("obesity_one_bg");
    obesity_two_table.classList.remove("obesity_two_bg");
    obesity_three_table.classList.remove("obesity_three_bg");
  }

  if (bmi >= 30 && bmi <= 34.9) {
    result.innerHTML = `BMI: ${bmi}kg/m<sup>2</sup> | Status: ${bmi_categories[3]}`;

    obesity_one_table.classList.add("obesity_one_bg");

    normal_weight_table.classList.remove("normalWeight_bg");
    overweight_table.classList.remove("overweight_bg");
    underweight_table.classList.remove("underweight_bg");

    obesity_two_table.classList.remove("obesity_two_bg");
    obesity_three_table.classList.remove("obesity_three_bg");
  }

  if (bmi >= 35 && bmi <= 39.9) {
    result.innerHTML = `BMI: ${bmi}kg/m<sup>2</sup> | Status: ${bmi_categories[4]}`;

    obesity_two_table.classList.add("obesity_two_bg");

    normal_weight_table.classList.remove("normalWeight_bg");
    underweight_table.classList.remove("underweight_bg");
    overweight_table.classList.remove("overweight_bg");

    obesity_one_table.classList.remove("obesity_one_bg");
    obesity_three_table.classList.remove("obesity_three_bg");
  }

  if (bmi >= 40) {
    result.innerHTML = `BMI: ${bmi}kg/m<sup>2</sup> | Status: ${bmi_categories[5]}`;

    obesity_three_table.classList.add("obesity_three_bg");

    normal_weight_table.classList.remove("normalWeight_bg");
    underweight_table.classList.remove("underweight_bg");
    overweight_table.classList.remove("overweight_bg");

    obesity_one_table.classList.remove("obesity_one_bg");
    obesity_two_table.classList.remove("obesity_two_bg");
  }

  return bmi;
};

form.addEventListener("submit", event);

reset.addEventListener("click", () => {
  result.classList.add("opacity-0");

  normal_weight_table.classList.remove("normalWeight_bg");
  underweight_table.classList.remove("underweight_bg");
  overweight_table.classList.remove("overweight_bg");
  obesity_one_table.classList.remove("obesity_one_bg");
  obesity_two_table.classList.remove("obesity_two_bg");
  obesity_three_table.classList.remove("obesity_three_bg");
});
