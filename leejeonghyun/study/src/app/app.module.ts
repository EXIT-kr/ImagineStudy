import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { Angular2Component } from './angular2.component';
import {routing} from "app/app.routing";
import { IndexComponent } from './index.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { JsComponent } from './js.component';
import {JsService} from "app/js.service";
import { AngularFireComponent } from './angular-fire.component';
import {AngularFireService} from "app/angular-fire.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Angular2Component,
    IndexComponent,
    JsComponent,
    AngularFireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PageScrollModule.forRoot()


  ],
  providers: [JsService,AngularFireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
