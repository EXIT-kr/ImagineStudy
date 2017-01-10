import {Card} from "app/card.model";
export class CardService{
  private cards: Card[] = [
    {head:"head1",description:"desc1"},
    {head:"head2",description:"desc2"},
    {head:"head3",description:"desc3"}

  ];
  getCards(){
    return this.cards;
  };
  addCard(){
    var newCard: Card = new Card("new head","new body");
    this.cards.push(newCard);
  };
}
