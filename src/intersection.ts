export {};

type hoge = {
  hoge: string;
};

type huga = {
  huga: number;
};

//intersection-type
type hogehuga = hoge & huga;

let hogehugan: hogehuga = {
  hoge: 'hogeeee',
  huga: 68686868
};

console.log(hogehugan);
