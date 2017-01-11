export class Card{
  public head: string;
  public description: string;
  constructor(head: string,description: string){
    this.head = head;
    this.description = description;
  }
}
export class Cards{
  public columnNumber: number;
  public cards: Card[];
  constructor(columnNumber:number){
    this.columnNumber= columnNumber;
    this.cards = [];
  }
}


