import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card.component';
import {ColumnService} from "app/column.service";
import { HeaderComponent } from './header.component';
import { AgendaComponent } from './agenda.component';
import { ColumnComponent } from './column.component';
import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    AgendaComponent,
    ColumnComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ColumnService],
  bootstrap: [AppComponent]

})
export class AppModule { }
