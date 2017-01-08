import { Component } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class Card {
  public name : String;
  
  title = 'card';
  text = 'hello world!';
}
