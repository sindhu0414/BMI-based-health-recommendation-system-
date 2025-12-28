function calculateBMI() {

    // GET INPUT VALUES
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let heightValue = document.getElementById("height").value;
    let weightValue = document.getElementById("weight").value;

    // VALIDATION
    if (name === "" || age === "" || gender === "" || heightValue === "" || weightValue === "") {
        alert("Please fill all the fields");
        return;
    }

    let height = heightValue / 100;
    let weight = parseFloat(weightValue);

    if (height <= 0 || weight <= 0) {
        alert("Height and Weight must be greater than zero");
        return;
    }

    // BMI CALCULATION
    let bmi = (weight / (height * height)).toFixed(2);

    // DISPLAY BASIC DETAILS
    document.getElementById("userName").innerText = name;
    document.getElementById("userAge").innerText = age;
    document.getElementById("userGender").innerText = gender;
    document.getElementById("bmiValue").innerText = bmi;

    let status = "";
    let color = "";
    let progress = 0;
    let tips = [];
    let meal = {};

    // UNDERWEIGHT
    if (bmi < 18.5) {
        status = "Underweight";
        color = "#3498db";
        progress = 25;
        tips = [
            "Increase calorie intake",
            "Eat protein rich foods",
            "Strength training",
            "Good sleep",
            "Frequent meals"
        ];
        meal = {
            breakfast: "Milk, Banana, Eggs",
            lunch: "Rice, Dal, Vegetable curry",
            snacks: "Dry fruits",
            dinner: "Chapati, Paneer"
        };
    }

    // NORMAL
    else if (bmi < 25) {
        status = "Normal Weight";
        color = "#2ecc71";
        progress = 50;
        tips = [
            "Balanced diet",
            "Regular exercise",
            "Drink enough water",
            "Proper sleep",
            "Avoid junk food"
        ];
        meal = {
            breakfast: "Oats, Fruits",
            lunch: "Brown rice, Dal",
            snacks: "Sprouts",
            dinner: "Vegetables, Chapati"
        };
    }

    // OVERWEIGHT
    else if (bmi < 30) {
        status = "Overweight";
        color = "#f39c12";
        progress = 75;
        tips = [
            "Reduce sugar",
            "Daily walking",
            "High fiber foods",
            "Control portions",
            "Avoid late meals"
        ];
        meal = {
            breakfast: "Vegetable omelette",
            lunch: "Salad, Soup",
            snacks: "Fruits",
            dinner: "Steamed vegetables"
        };
    }

    // OBESITY
    else {
        status = "Obesity";
        color = "#e74c3c";
        progress = 90;
        tips = [
            "Consult doctor",
            "Low calorie diet",
            "Daily exercise",
            "Avoid fried food",
            "Monitor BMI regularly"
        ];
        meal = {
            breakfast: "Green tea, Fruits",
            lunch: "Boiled vegetables",
            snacks: "Apple",
            dinner: "Vegetable soup"
        };
    }

    // UPDATE UI
    document.getElementById("bmiStatus").innerText = status;
    document.getElementById("bmiStatus").style.background = color;

    document.getElementById("progressBar").style.width = progress + "%";
    document.getElementById("progressBar").style.background = color;

    // HEALTH TIPS
    let list = document.getElementById("tipsList");
    list.innerHTML = "";
    tips.forEach(tip => {
        let li = document.createElement("li");
        li.innerText = tip;
        list.appendChild(li);
    });

    // MEAL PLAN
    document.getElementById("breakfast").innerText = meal.breakfast;
    document.getElementById("lunch").innerText = meal.lunch;
    document.getElementById("snacks").innerText = meal.snacks;
    document.getElementById("dinner").innerText = meal.dinner;

    // SHOW RESULT
    document.getElementById("result").classList.remove("hidden");
}
