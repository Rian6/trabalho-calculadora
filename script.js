const display = document.querySelector("#display");
const keys = document.querySelector(".keys");
var formula = ""

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const keyContent = key.textContent;

    if (formula == "0") {
      formula = ""
    }

    if (keyContent == "=") {
      try {
        formula = eval(formula.replace("^", "**"))
      } catch (e) {
        formula = "Erro de sintaxe"
      }
    } else if (keyContent == "←") {
      formula = formula.substring(0, formula.length - 1);
    } else if (keyContent == "C") {
      formula = "0";
    }
    else {
      formula = formula + keyContent
    }

    if (formula == "") {
      formula = "0"
    }
    display.value = formula
  }
});