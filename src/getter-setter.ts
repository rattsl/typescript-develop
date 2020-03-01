export {};

// * owner
//    *所有者
//    *初期化時設定可
//    *途中変更不可
//    *参照可
// * secretNumber
//    *個人番号
//    *初期化時設定可
//    *途中変更可
//    *参照不可

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(): string {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint(): string {
    return `owner: ${this._owner}, secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('rattsl', 1234567890);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
