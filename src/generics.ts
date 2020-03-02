export {};

// const echo = (arg: string): string => {
//   return arg
// }

// const echo = (arg: number:): number => {
//   return arg
// }

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<string>('hello,generics!'));
console.log(echo<number>(12345));

class Gene<T> {
  constructor(public arg: T) {}

  echo(): T {
    return this.arg;
  }
}

let ins = new Gene<string>('genegene');
console.log(ins.echo());
