let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.buttons button');

let expression = "";

function handleButtonClick(event) {
    let value = event.target.innerText;

    if (value === "=") {
        try {
            expression = eval(expression);
            display.value = expression;
        } catch (error) {
            display.value = "Error";
            expression = "";
        }
    } else if (value === "AC") {  // All Clear
        expression = "";
        display.value = "";
    } else if (value === "C") {  // Single Clear (Backspace)
        expression = expression.slice(0, -1);
        display.value = expression;
    } else {
        expression += value;
        display.value = expression;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});
