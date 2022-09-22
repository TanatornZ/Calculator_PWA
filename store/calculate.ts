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

export const calculate = (text: string): number => {
  const oparator = ["+", "-", "/", "x"];
  const allInt = [];
  const allOparator = [];
  let int = "";
  //sparate number and oparator
  for (let i = 0; i < text.length; i++) {
    if (oparator.includes(text[i])) {
      if (Number(int)) {
        allInt.push(Number(int));
      }
      allOparator.push(text[i]);
      int = "";
    } else {
      int += text[i];
    }
  }
  if (Number(int)) {
    allInt.push(Number(int));
  }
  console.log("int before ", allInt);
  console.log("oparator before", allOparator);

  //calculate
  if (allInt.length - allOparator.length === 1) {
    while (allInt.length !== 1) {
      const num1 = allInt.shift();
      const num2 = allInt.shift();

      const oparator = allOparator.shift();
      let result;
      if (num1 && num2) {
        switch (oparator) {
          case "+":
            result = num1 + num2;
            allInt.unshift(result);
          case "-":
            result = num1 - num2;
            allInt.unshift(result);
          case "x":
            result = num1 * num2;
            allInt.unshift(result);
          case "/":
            result = num1 / num2;
            allInt.unshift(result);
        }
      }
    }

    console.log('result ' , allInt[0])

    return 1;
  }

  return 0;
};
