
import {Card,Cards} from "app/card.model";
export class Column{
  public number: number;
  public title: string;
  public cards: Cards;
  constructor(number: number,title: string, cards:Cards){
    this.number = number;
    this.title = title;
    this.cards = cards;
  }
}
