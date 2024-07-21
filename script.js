/*Add your JavaScript here*/

var hawaiiScore = 0;
var greeceScore = 0;

var questionCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", hawaii);
q1a2.addEventListener("click", greece);

q2a1.addEventListener("click", hawaii);
q2a2.addEventListener("click", greece);

q3a1.addEventListener("click", greece);
q3a2.addEventListener("click", hawaii);

restart.addEventListener("click", restartIt)

function hawaii(){
  hawaiiScore +=1;
  questionCount +=1;

  console.log("The hawaii score is " + hawaiiScore + " and the question score is " + questionCount);

  if (questionCount == 3){
    console.log("The quiz is over!");
    updateResult();
  }
}

function greece(){
  greeceScore +=1;
  questionCount +=1;

  console.log("The greece score is " + greeceScore + " and the question score is " + questionCount);
  if (questionCount == 3) {
    console.log("The quiz is over!");
    updateResult();
  }
}

function updateResult (){
  if (hawaiiScore >= 2){
    result.innerHTML = "Your result is...You should go to Hawaii!";
    console.log( "You should go to Hawaii!")
  }
    else if (greeceScore >= 2){
      result.innerHTML = "Your result is...You should go to Greece!";
      console.log( "You should go to Greece!")
    }
 
}

function restartIt(){
  result.innerHTML = "Your result is..."
  hawaiiScore = 0
  greeceScore = 0
  questionCount = 0
}