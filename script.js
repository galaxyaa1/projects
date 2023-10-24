function add() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("results").innerHTML = "Result: " + result;
  }
  
  function subtract() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("results").innerHTML = "Result: " + result;
  }
  
  function multiply() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("results").innerHTML = "Result: " + result;
  }
  
  function divide() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result = num1 / num2;
    document.getElementById("results").innerHTML = "Result: " + result;
  }
  
  function square() {
    var num1 = Number(document.getElementById("num1").value);
    var result = num1 * num1;
    document.getElementById("results").innerHTML = "Result: " + result;
  }