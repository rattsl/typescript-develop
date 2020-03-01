export {};

//クラスは大文字
class Person {
  //propatyの型の宣言
  //↓メンバ変数
  public name: string;
  //private age: number;
  protected age: number;
  protected nationarity: string;

  //constructorはreturnしないのでアノテーション不要
  constructor(name: string, age: number, nationarity: string = 'japan') {
    this.name = name;
    this.age = age;
    this.nationarity = nationarity;
  }

  profile(): string {
    return `im ${this.name} and ${this.age} years old! `;
  }
}

//subclass作成
class Android extends Person {
  constructor(name: string, age: number, nationarity: string) {
    //superを呼ぶことで親クラスのconstructorメソッドを呼ぶことができる
    //親クラスのコンストラクタメソッドで期待されている引数を渡す
    super(name, age, nationarity);
  }

  profile(): string {
    return `im ${this.name} and ${this.age}years old, and from ${this.nationarity}!`;
  }
}

//taroインスタンスを生成
let taro = new Person('taro', 13);
let hanakoBot = new Android('hanako', 1, 'ibm');
console.log(taro.profile());
console.log(hanakoBot.profile());
// console.log(taro.age)

//クラスを人に使ってもらう人(npm packageを開発する人など)はアクセス修飾子を意識する必要がある
