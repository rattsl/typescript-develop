export {};

type ObjectType = {
  name: string;
  age: number;
};

//イコール不要
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'rattsl',
  age: 23
};
