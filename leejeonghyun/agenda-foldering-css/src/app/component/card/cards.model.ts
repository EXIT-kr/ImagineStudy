import {Card} from './card.model';
export class Cards{
  public columnNumber: number;
  public cards: Card[];
  constructor(columnNumber:number){
    this.columnNumber= columnNumber;
    this.cards = [];
  }
}
