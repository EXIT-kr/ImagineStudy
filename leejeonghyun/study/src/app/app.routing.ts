import {Routes,RouterModule} from "@angular/router";
import {Angular2Component} from "app/angular2.component";
import {IndexComponent} from "app/index.component";
import {JsComponent} from "app/js.component";
import {AngularFireComponent} from "app/angular-fire.component";


const APP_ROUTES: Routes = [
  { path:'',redirectTo:'/index',pathMatch: 'full'},
  { path:'angular2',component:Angular2Component},
  { path:'index',component:IndexComponent},
  { path:'js',component:JsComponent},
  { path:'af',component:AngularFireComponent}

];
export const routing = RouterModule.forRoot(APP_ROUTES);
