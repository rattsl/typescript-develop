export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  if (printable) {
    console.log('arguments printed');
  }
  let data: number = weight / (height * height);
  return data;
};

bmi(1.75, 80, true);
