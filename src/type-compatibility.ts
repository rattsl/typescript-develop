export {};

let foo: any = 'hoge';
let bar: string = 'hogefuga';

foo = bar;
console.log(foo);

let stg: string = '上書きされたくない';
let stgLiteral: '上書きするぜ' = '上書きするぜ';

stg = stgLiteral;
console.log(stg);

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let ningen: Animal;
ningen = new Person(20, 'yj');

console.log(ningen);
