let heightInMeters = Number(prompt('Enter height in meters:'));
let weightInKgs = Number(prompt('Enter weight in kg:'));

const bmiValue = function(height, weight) {
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        return "Invalid input";
    }

    // always use the function inputs or function parameters
    let bmi = weight / (height * height);

    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Healthy weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

console.log(bmiValue(heightInMeters, weightInKgs));