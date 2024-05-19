function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
  
    if (weight === "" || height === "") {
      alert("Please enter both weight and height.");
      return;
    }
  
    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2); // Round to two decimal places
  
    let category;
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    const result = `Your BMI is ${bmiRounded}. You are in the ${category} category.`;
    document.getElementById("result").innerHTML = result;
  }
  