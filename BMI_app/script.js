function calcBMI(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const rawBMI = weight / (height * height);
    const BMI = Math.round(rawBMI * 100) / 100;
    document.getElementById("result").innerText = "BMI: " + BMI;
}