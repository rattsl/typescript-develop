export {};

//クラスは大文字
class Person {
  //propatyの型の宣言
  public name: string;
  private age: number;
  protected nationarity: string;

  //constructorはreturnしないのでアノテーション不要
  constructor(name: string, age: number, nationarity: string = 'japan') {
    this.name = name;
    this.age = age;
    this.nationarity = nationarity;
  }

  profile(): string {
    return `im ${this.name} and ${this.age} years old and im from ${this.nationarity}! `;
  }
}

//taroインスタンスを生成
let taro = new Person('taro', 13);
console.log(taro.profile());
// console.log(taro.age)
