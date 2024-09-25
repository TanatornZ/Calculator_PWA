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
    }
  }

  return numbers[0] as number;
};
