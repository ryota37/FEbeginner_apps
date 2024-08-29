function calcBMI(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter a numeric value.");
        return;
    }
    
    if (height <= 0 || weight <= 0 || height > 2.5 || weight > 300) {
        alert("Please enter values within the correct range.");
        return;
    }
    
    const rawBMI = weight / (height * height);
    const BMI = Math.round(rawBMI * 100) / 100;
    document.getElementById("result").innerText = "BMI: " + BMI;

    let classification;

    if(BMI < 18.5){
        classification = "Underweight";
    } else if(BMI >= 18.5 && BMI < 24.9){
        classification = "Normal weight";
    } else if(BMI >= 25 && BMI < 29.9){
        classification = "Overweight";
    } else if(BMI >= 30){
        classification = "Obesity";
    }

    document.getElementById("classification").innerText = "Classification: " + classification;
}