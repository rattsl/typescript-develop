export {};

//クラスは大文字
class Person {
  //propatyの型の宣言
  name: string;
  age: number;

  //constructorはreturnしないのでアノテーション不要
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `im ${this.name} and ${this.age} years old!`;
  }
}

//taroインスタンスを生成
let taro = new Person('taro', 13);
console.log(taro.profile());
