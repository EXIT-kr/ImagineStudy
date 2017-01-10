import { Component, OnInit } from '@angular/core';
import { Card, Column, ColumnService } from './Components';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styles: []
})
export class AgendaComponent implements OnInit {

  columns :Column[] = [];
  addColumn(){
    this.columnService.addColumn();
  }
  addCard(column){
    this.columnService.addCard(column);
  }

  constructor(private columnService:ColumnService) {}


  ngOnInit() {
    this.columns = this.columnService.getColumns();
  }

}
