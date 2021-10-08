import "./styles.css";

var message = document.querySelector(".message");
var button = document.querySelector(".is-Triangle");
var inputs = document.querySelectorAll(".angle-input");

function resetDictionary() {
  for (var i = 0; i < inputs.length; i++) {
    var available = inputs;
    available[i].value = "";
  }
  console.log("Dictionary reset");
  inputs.innerHTML = "";
}

function isTriangleHandler() {
  var total = 0;
  for (var i = 0; i < inputs.length; i++) {
    console.log(inputs[i].value);
    if (inputs[i].value <= 0) {
      //console.log("hey");
      message.innerText = "Enter positive angles";
      break
    } else {
      total = total + Number(inputs[i].value);
      //console.log(inputs[i].value);
      if (total === 180) {
        message.innerText = "Triangle can be formed with these angles";
      } else {
        message.innerText = "Triangle cannot be formed with these angles";
      }
    }
  }
}

button.addEventListener("click", isTriangleHandler, resetDictionary());
