export {};

// class Person {
//   name: string;
//   age: number;

//   constructorによるmenber変数の初期化はオブジェクト指向プログラミングの基本のパターン
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

//typescriptではアクセス修飾子をconstructorの引数に入れると自動で初期化処理を行ってくれるぜ!すごい！
class Person {
  constructor(public name: string, protected age: number) {}
}

let me = new Person('rattsl', 23);
console.log(me);
