/**
 * @throws Error if the number is negative
 */
const addPositiveNumbers = (numberA: number, numberB: number): number => {
  if (numberA <= 0) throw new Error(`Number A must be positive.`);
  return numberA + numberB;
};

const myFunc = () => {
  addPositiveNumbers(1, 2);
  addPositiveNumbers(-1, 3);
};

try {
  myFunc();
} catch {
  console.log(`Error!`);
}
