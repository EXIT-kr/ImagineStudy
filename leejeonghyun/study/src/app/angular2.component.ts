import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-angular2',
  templateUrl: './angular2.component.html',
  styleUrls: ['./angular2.component.css']
})
export class Angular2Component implements OnInit {
  simpleDataBindingAppComponentTs :string =
    `export class AppComponent {
        collectables = [
            {desc : 'Ant', type:'Book'},
            {desc : 'Bnt', type:'Cook'}
        ]
    }";`;

  simpleDataBindingAppComponentHtml :string = `<ul>
  <li *ngFor="let item of collectables">
    <p>{{item.type}}</p>
    <p>{{item.desc}}</p>
  </li>
</ul>`;
  simpleEventBindingAppComponentTs :string =
    `export class AppComponent {
        onClick(){
            alert("!");
        }
     }`;
  simpleEventBindingAppComponentHtml :string = `<button (click)="onClick()">
  Click
</button>`;
  modelAndServiceAppModelTs :string = `export class Collectable{
  public desc: string;
  public type: string;

  constructor(desc: string, type: string){
    this.desc = desc;
    this.type = type;
  }
}`;
  modelAndServiceAppServiceTs :string = `import {Collectable} from "./collectable.model";
export class CollectableService{

  private collectables: Collectable[] = [
    {description: 'THE SELFISH GENES', type: 'Book'},
    {description: 'MacBook', type: 'Labtop'},
    {description: 'IPhone', type: 'SmartPhone'},
    {description: 'LOL', type: 'Game'}
  ];

  getCollectables(){
    return this.collectables;
  }

}`;
  modelAndServiceAppModuleTs :string =
    `
    ...
    import { CollectableService } from './shared/collectable.service';
    
    @NgModule({
      ...
      providers: [CollectableService],
      ...
    })
    `;
  modelAndServiceAppComponentTs :string =
    `
import {CollectableService} from './collectable.service';
import {Collectable} from './collectable.model';

export class CollectionComponent implements OnInit {
  collectedItems:Collectable[] = [];

  constructor(private collectableService: CollectableService) {}


  ngOnInit() {
   this.collectedItems=this.collectableService.getCollection();
  }

}`;
  code1 = `import {Routes,RouterModule} from "@angular/router";
import {CollectionComponent} from "./collection/collection.component";
import {MarketComponent} from "app/market/market.component";

const APP_ROUTES: Routes = [
  { path:'',redirectTo:'/collection',pathMatch: 'full'},
  { path:'collection',component:CollectionComponent},
  { path:'market',component:MarketComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);`;
  code2 = `
  ...
import {routing} from "app/app.routing";
@NgModule({
  ...
  imports: [
    ...
    routing
  ],
  ...
})
`;
  code3 = `<div class="row">
  <div class="col-xs-12">
    <ul class="nav nav-pills">
      <li routerLinkActive="active"><a [routerLink]="['/collection']">Collection</a></li>
      <li routerLinkActive="active"><a [routerLink]="['/market']">Market</a></li>
    </ul>
  </div>
</div>`;
  code4 = `<div class="container">
  <app-header></app-header>
  <router-outlet></router-outlet>
</div>`;
  paragraph1 = `Angular Component의 HTML template에 pre 태그를 주고 code를 작성하는 경우가 있는데
        이는 좋은 방법이 아니다. ng serve를 시행하면 code의 내용까지 complie해버려 error가 
        발생하기 때문이다. 이럴 때에는 pre 태그 안에 {{Name}} 처리를 해주고 이 template을 
        사용하는 ts에 해당 코드 내용을 정의하는것으로 해결 가능하다.`;
  code5 = `<div class="row topic">
      <h2>Write Code</h2>
      <p>{{paragraph1}}
      </p>
    </div>`;
  code6 = `paragraph1 = \`Angular Component의 HTML template에 pre 태그를 주고 code를 작성하는 경우가 있는데
  이는 좋은 방법이 아니다. ng serve를 시행하면 code의 내용까지 complie해버려 error가
  발생하기 때문이다. 이럴 때에는 pre 태그 안에 {{Name}} 처리를 해주고 이 template을
사용하는 ts에 해당 코드 내용을 정의하는것으로 해결 가능하다.\`;`;
  code7 =
    `import {ActivatedRoute} from "@angular/router";
     
     export class Angular2Component{
      constructor(private route: ActivatedRoute) { }
      onAnchorClick ( ) {
        this.route.fragment.subscribe ( f => {
        const element = document.querySelector ( "#" + f )
        if ( element ) element.scrollIntoView ( element )
        });
      }
     }
`
  code8 =
    `<div class="col-md-2 left">
    <nav id="myScrollspy" class = "side-nav">
    <ul class="nav nav-pills nav-stacked">
      <li><a [routerLink]="['/angular2']" fragment="section1" (click)="onAnchorClick()">Setting</a></li>
      <li><a [routerLink]="['/angular2']" fragment="section2" (click)="onAnchorClick()">Generate Component</a></li>
      <li><a [routerLink]="['/angular2']" fragment="section3" (click)="onAnchorClick()">Simple Data Binding</a></li>
      <li><a [routerLink]="['/angular2']" fragment="section4" (click)="onAnchorClick()">Simple Event Binding</a></li>
      <li><a [routerLink]="['/angular2']" fragment="section5" (click)="onAnchorClick()">Model And Service</a></li>
      <li><a [routerLink]="['/angular2']" fragment="section6" (click)="onAnchorClick()">Routing</a></li>
      <li><a [routerLink]="['/angular2']" fragment="section7" (click)="onAnchorClick()">Write Code</a></li>
    </ul>
    </nav>
  </div>
  ...
  ...
  ...
  <div class = "scroll-point" id = "section1"></div>
  ...
  ...
  ...
  <div class = "scroll-point" id = "section2"></div>
  ...
  ...
  ...
`
  paragraph2 = "Angular2의 template내에서 <a href = '#section1'>과 같은 코드로는 scrolling이 제대로 이루어지지 않는다." +
    " 따라서 nav클릭에 따른 scroll이동 효과를 보고 싶다면 아래의 약간 복잡한 과정을 거쳐야 한다.";
  constructor(private route: ActivatedRoute) { }
  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView ( element )
    });
  }
  ngOnInit() {
  }

}
