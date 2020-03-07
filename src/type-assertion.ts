export {};

let name: any = 'hayato';

// assertion 1(recommended)
// let length = name.length as number

// assertion 2
// let length = (name as string).length

// assertion 3(not recommended)
let length = (<string>name).length;

// length = "hoge"
