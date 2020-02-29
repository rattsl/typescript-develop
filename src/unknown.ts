export {};

let num = (): number => 29;

let calc: unknown = num();

//type-guard
if (typeof calc === 'number') {
  calc = calc + 1;
  console.log(calc);
}
