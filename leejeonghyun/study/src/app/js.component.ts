import { Component, OnInit } from '@angular/core';
import {JsService} from "app/js.service";
import {Part} from "app/app.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent implements OnInit {


  parts: Part[] = [];
  constructor(private jsService: JsService,private route: ActivatedRoute) { }

  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView ( element )
    });
  }
  ngOnInit() {
    this.parts=this.jsService.getJs();
  }

}
