export {};

//constはconstantの略
//データの値の書き換えは行わないということをコンパイラに伝える

let name = 'kakiuchi';
name = 'rattsl';

//'kaki'という文字列リテラルしか代入できなくなる
let nickname = 'kaki' as const;

// nickname = 'kakiu'

// asconstをつけるとreadonly修飾子がつく
let profile = {
  name: 'hayato',
  height: 174
} as const;

// profile.height = 178
