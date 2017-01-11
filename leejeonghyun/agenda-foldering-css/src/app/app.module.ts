import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopComponent,BottomComponent,LeftComponent} from './_include';
import { CardComponent,ColumnComponent,ContainerComponent,ColumnService} from './component';
import { AgendaComponent,ChatComponent,DashComponent,LoginComponent} from './main';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BottomComponent,
    LeftComponent,
    CardComponent,
    ColumnComponent,
    ContainerComponent,
    AgendaComponent,
    ChatComponent,
    DashComponent,
    LoginComponent
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
