import { Component, Directive, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Directive({
  selector: 'myHighlight'
})

export class Card {
  // public title : String;
  // constructor(public title : String){
  //   title = this.title;
  // }
  @Input('myHighlight') highlightColor: string;
  debugger;
  title = this.highlightColor
  text = 'hello world!';

}
