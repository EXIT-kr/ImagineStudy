import {Column} from "./column.model";
import {Card} from "../card/card.model";
import {Cards} from "../card/cards.model";

export class ColumnService{
  private columnNumber = 3;
  private cards1: Cards = {
    columnNumber:1,
    cards:[{head:"head1-1",description:"desc"},
      {head:"head1-2",description:"desc"},
      {head:"head1-3",description:"desc"}]};
  private cards2: Cards = {
    columnNumber:2,
    cards:[{head:"head2-1",description:"desc"},
      {head:"head2-2",description:"desc"}]};
  private cards3: Cards = {
    columnNumber:3,
    cards:[{head:"head3-1",description:"desc"}]
  };
  private columns: Column[] = [
    {number : 1,title : "월",cards : this.cards1},
    {number : 2,title : "화",cards : this.cards2},
    {number : 3,title : "수",cards : this.cards3}
  ];
  addCard(column: Column){
    var newCard: Card = new Card("new cards","new cards");
    column.cards.cards.push(newCard);
  }
  getColumns(){
    return this.columns;
  }
  addColumn(){
    this.columnNumber++;
    var newCards: Cards = new Cards(this.columnNumber);
    var newColumn: Column = new Column(this.columnNumber,"new column",newCards);
    this.columns.push(newColumn);
  };

}
