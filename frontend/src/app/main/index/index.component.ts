import { Component, OnInit } from '@angular/core';
import { Menu } from "../menu"


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  menus : Menu[] = []

  constructor() { }

  ngOnInit() {
  }

  onClick(menu: Menu) {
  	console.log(menu)
  	this.menus.push(menu)
  }

}
