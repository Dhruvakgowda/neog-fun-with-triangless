var form = document.querySelector(".form");
var button = document.querySelector(".button");
var message = document.querySelector(".message");
var answers = [
  "90°",
  "(5,12,13)",
  "Equilateral Triangle",
  "Hypotenuse",
  "one right angle",
  "12,16,20",
  "Equilateral Triangle",
  "45°",
  "a+b+c",
  "No lines of symmetry"
];

function quizHandler() {
  var i = 0;
  var score = 0;
  var formAns = new FormData(form);
  for (var ans of formAns.values()) {
    if (ans === answers[i]) {
      console.log(answers[i]);
      score = score + 1;
      console.log(ans);
      console.log(formAns);
    }
    i++;
  }
  message.innerText = "Congrats! Your Score is " + score;
}

button.addEventListener("click", quizHandler);
