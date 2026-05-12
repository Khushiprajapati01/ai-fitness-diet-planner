function generatePlan(){

  let age =
    document.getElementById("age").value;

  let weight =
    document.getElementById("weight").value;

  let height =
    document.getElementById("height").value;

  let goal =
    document.getElementById("goal").value;

  if(
    age === "" ||
    weight === "" ||
    height === ""
  ){

    alert("Please fill all fields");

    return;
  }

  height = height / 100;

  let bmi =
    (weight / (height * height)).toFixed(1);

  let calories =
    Math.floor(weight * 24);

  let status = "";

  let plan = "";

  let progress = 0;

  if(bmi < 18.5){

    status = "Underweight";

    progress = 35;

    plan = `
      <h3>🍽 Diet Plan</h3>
      <p>
      Eat milk, bananas, eggs,
      nuts and protein foods.
      </p>

      <h3>🏋️ Workout Plan</h3>
      <p>
      Strength training and
      muscle gain exercises.
      </p>

      <h3>💧 Water Intake</h3>
      <p>3 Liters Daily</p>
    `;
  }

  else if(bmi < 25){

    status = "Healthy";

    progress = 70;

    plan = `
      <h3>🥗 Diet Plan</h3>
      <p>
      Balanced meals,
      fruits and vegetables.
      </p>

      <h3>🏃 Workout Plan</h3>
      <p>
      Cardio, yoga,
      regular exercise.
      </p>

      <h3>💧 Water Intake</h3>
      <p>3-4 Liters Daily</p>
    `;
  }

  else{

    status = "Overweight";

    progress = 90;

    plan = `
      <h3>🥦 Diet Plan</h3>
      <p>
      Low sugar, high protein,
      calorie deficit meals.
      </p>

      <h3>🔥 Workout Plan</h3>
      <p>
      Daily cardio,
      running and fat loss workouts.
      </p>

      <h3>💧 Water Intake</h3>
      <p>4 Liters Daily</p>
    `;
  }

  if(goal === "loss"){

    calories -= 300;
  }

  else if(goal === "gain"){

    calories += 300;
  }

  document.getElementById("bmi").innerHTML =
    bmi;

  document.getElementById("calories").innerHTML =
    calories + " kcal";

  document.getElementById("status").innerHTML =
    status;

  document.getElementById("plan").innerHTML =
    plan;

  document.getElementById("progress").style.width =
    progress + "%";

}