export {};

// profileに動的に値を代入したい
// index-signatureとはオブジェクトのインデックス、keyにアノテーションするするときに使う
// How to write index signature
// { [index: typeForIndex]: typeForValue }
// name, underTwentyは必須パラメーターにしておく

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'hayato', underTwenty: false };
profile.age = 23;
