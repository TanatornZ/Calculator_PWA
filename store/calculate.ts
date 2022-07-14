const checkOparator = (text: string) => {
  if (text.includes("+")) {
    return "+";
  } else if (text.includes("-")) {
    return "-";
  } else if (text.includes("x")) {
    return "x";
  } else if (text.includes("/")) {
    return "/";
  }
};

export const calculate = (text: string) : number => {
  const oparator = checkOparator(text);
  let array;
  let num1;
  let num2;
  switch (oparator) {
    case "+":
      array = text.split("+");
      num1 = array[0];
      num2 = array[1];
      return parseInt(num1) + parseInt(num2);
    case "-":
      array = text.split("-");
      num1 = array[0];
      num2 = array[1];
      return parseInt(num1) - parseInt(num2);
    case "x":
      array = text.split("x");
      num1 = array[0];
      num2 = array[1];
      return parseInt(num1) * parseInt(num2);
    case "/":
      array = text.split("/");
      num1 = array[0];
      num2 = array[1];
      return parseInt(num1) / parseInt(num2);
  }

  return 0 ;
};
