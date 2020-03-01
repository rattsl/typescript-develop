export {};

//spacenameはclassをファイルと考えるとフォルダのようなもの

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

let me = new Japanese.Tokyo.Person('hayato');
let meOsaka = new Japanese.Osaka.Person('hayao');
let mj = new English.Person('Michael', 'Joseph', 'Jacson');

console.log(meOsaka.name);

console.log(mj.lastName);
