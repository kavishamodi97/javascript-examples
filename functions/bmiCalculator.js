//use of passing parameters in function and return parameters

function bmiCalculator(weight,height){

  var bmiCal=weight/(height*height);
  var roundedBmi= Math.round(bmiCal);
  console.log("BMI Calculation  " +roundedBmi);

}

var bmi=bmiCalculator(65,1.8);
