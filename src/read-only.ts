export {};

//readonly修飾子
class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('rattsl');
console.log(myVisaCard);

// myVisaCard.owner = 'covid-21';
