export {};

//　クラスの継承は単一
// class A {}
// class B {}

// class C extends A, B {

// }

interface A {
  apple(): void;
}

interface B {
  banana(): void;
}

class Ab implements A, B {
  apple() {
    console.log('Apple');
  }
  banana() {
    console.log('Banana');
  }
}

const word = new Ab();
word.apple();
word.banana();
