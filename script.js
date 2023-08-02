let numberOne, numberTwo;

function getValidNumber(promptMessage) {
  let input;
  do {
    input = Number(prompt(promptMessage));
  } while (isNaN(input));
  return input;
}

numberOne = getValidNumber("Write a number:");
numberTwo = getValidNumber("Write another number:");

const sumResult = numberOne + numberTwo;
const subtractionResult = numberOne - numberTwo;
const multiplicationResult = numberOne * numberTwo;
const divisionResult = numberOne / numberTwo;
const remainderResult = numberOne % numberTwo;

const isSumEven = sumResult % 2 === 0 ? "The sum is even" : "The sum is odd";
const numbersAreEqual = numberOne === numberTwo ? "They are the same number" : "They are different numbers";

alert(`${numbersAreEqual}`);
alert(`The sum of ${numberOne} with ${numberTwo} is ${sumResult}`);
alert(`${isSumEven}`);
alert(`The subtraction of ${numberOne} by ${numberTwo} is ${subtractionResult}`);
alert(`The multiplication of ${numberOne} by ${numberTwo} is ${multiplicationResult}`);
alert(`The division of ${numberOne} by ${numberTwo} is ${divisionResult}`);
alert(`The remainder of ${numberOne} by ${numberTwo} is ${remainderResult}`);

