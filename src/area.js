var message = document.querySelector("#message");
var button = document.querySelector("#button");
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");

function calcArea() {
  var area = 0;
  area = Number((input1.value * input2.value) / 2);
  message.innerText = "The Area is " + area.toFixed(2);
}

button.addEventListener("click", calcArea);
