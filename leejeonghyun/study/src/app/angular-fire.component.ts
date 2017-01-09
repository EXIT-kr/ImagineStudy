import { Component, OnInit } from '@angular/core';
import {Part} from "app/app.model";
import {ActivatedRoute} from "@angular/router";
import {AngularFireService} from "app/angular-fire.service";
@Component({
  selector: 'app-angular-fire',
  templateUrl: './angular-fire.component.html',
  styleUrls: ['./angular-fire.component.css']
})
export class AngularFireComponent implements OnInit {

  parts: Part[] = [];
  constructor(private jsService: AngularFireService,private route: ActivatedRoute) { }

  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView ( element )
    });
  }
  ngOnInit() {
    this.parts=this.jsService.getAngularFire();
  }

}
