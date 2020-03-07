export {};

//まだデータの中身がわからないときに設定しておく変数の型nullable-type
//tsconfig.jsonのstrictNullCheckをfalseにするとprofile = nullにもできちゃう
// 型アノテーションをunion-typeに

let profile: { name: string; age: number | null } = {
  name: 'hayato',
  age: null
};
