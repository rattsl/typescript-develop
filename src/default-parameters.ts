export {};
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number = 60
) => weight / (height * height);

console.log(bmi);
