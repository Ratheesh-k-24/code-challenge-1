
//question -2   "12+3*5"

let a = "12 + 3 * 5";
let splitArray = a.split(" ");
console.log(splitArray);
let number = [];
let operation = [];
splitArray.forEach((n) => {
  if (!isNaN(parseInt(n))) {
    number.push(parseInt(n));
  } else {
    operation.push(n);
  }
});
console.log(number);
console.log(operation);
let result = number.shift();
operation.forEach((n) => {
  let num = number.shift();
  switch (n) {
    case "+":
      console.log(result);
      console.log(num);
      result += num;
      console.log(result);
      break;
    case "-":
      result -= num;
      break;
    case "*":
      console.log(result);
      console.log(num);
      result *= num;
      break;
    case "/":
      result /= num;
      break;
    default:
      console.log("Invalid Operation");
  }
});
console.log(result);


//3.