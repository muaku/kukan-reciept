import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuService } from "../menu.service"
import { Menu } from "../Menu"


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	menuItems: Menu[] = []


  constructor(private _menuService: MenuService) { }

  ngOnInit() {
  	this.getMenus()
  }

  getMenus(){

  	return this._menuService.getAllMenus()
  			.subscribe(menus => this.menuItems = menus)
  }

 // notify list
  @Output() notify = new EventEmitter<any>();
  onClick(item: Menu){
    this.notify.emit(item)
  }

}
