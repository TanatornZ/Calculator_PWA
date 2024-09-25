export const calculate = (text: string): number | string => {
  const OPERATORS = ["+", "-", "/", "x"];
  const numbers: number[] = [];
  const operators = [];
  let currentNumber = "";
  let isNegative = false;

  // Helper to push current number to the array
  const pushNumber = () => {
    if (currentNumber) {
      numbers.push(isNegative ? -Number(currentNumber) : Number(currentNumber));
      currentNumber = "";
      isNegative = false;
    }
  };

  // Handle case where input starts with an operator (assume 0 before it)
  if (OPERATORS.includes(text[0]) && text[0] !== "-") {
    numbers.push(0); // Add a starting number 0 if input begins with +, x, or /
  }

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (OPERATORS.includes(char)) {
      if (char === "-" && (i === 0 || OPERATORS.includes(text[i - 1]))) {
        isNegative = true;
      } else {
        pushNumber();
        operators.push(char);
      }
    } else {
      currentNumber += char;
    }
  }

  if (currentNumber) {
    numbers.push(Number(currentNumber));
  }

  while (operators.length > 0) {
    const num1 = numbers.shift();
    const num2 = numbers.shift();

    const operator = operators.shift();
    let result: number = 0;
    if (num1 !== undefined && num2 !== undefined) {
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "x":
          result = num1 * num2;
          break;
        case "/":
          if (num2 === 0) {
            return "Division by zero is not allowed.";
          }
          result = num1 / num2;
          break;
      }
      numbers.unshift(result);
    } else {
      numbers.unshift(num1 || 0);
    }
  }

  if (numbers[0].toString().length > 18) {
    return "Error, have more number";
  }

  return numbers[0] as number;
};
