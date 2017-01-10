import {Component, Output, Input} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styles: []
})


  export class CardComponent {
  @Input() header: string = 'this is header';
  @Input() footer: string = 'this is footer';
}


