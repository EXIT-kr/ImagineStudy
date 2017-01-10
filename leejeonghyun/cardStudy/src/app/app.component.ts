import {Component, OnInit} from '@angular/core';
import {Card} from "app/card.model";
import {CardService} from "app/card.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cards :Card[] = [];
  addCard(){
    this.cardService.addCard();
  }
  constructor(private cardService:CardService) {}


  ngOnInit() {
    this.cards = this.cardService.getCards();
  }

}
