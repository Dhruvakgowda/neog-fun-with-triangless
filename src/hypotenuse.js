var message = document.querySelector("#message");
var button = document.querySelector("#button");
var inputs = document.querySelectorAll("#input");

function calcHypotenuse() {
  var hypotenuse = 0;
  for (var i = 0; i < inputs.length; ++i) {
    hypotenuse = hypotenuse + Number(inputs[i].value * inputs[i].value);
  }
  hypotenuse = Math.sqrt(hypotenuse);
  message.innerText = "Length of the Hypotenuse is " + hypotenuse;
}

button.addEventListener("click", calcHypotenuse);
