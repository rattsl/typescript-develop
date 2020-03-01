export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Hayato';
  static lastName: string = 'Kakiuchi';

  static message(): string {
    return `Im ${this.firstName} ${Me.lastName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

console.log(Me.firstName);
console.log(Me.message());
