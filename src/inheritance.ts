export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'i can run';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    return `${super.run()} ${this.speed}km/h`;
  }
}

console.log(new Animal('mickey'));
console.log(new Lion('simpa', 80));
console.log(new Lion('kajima', 123).run());
