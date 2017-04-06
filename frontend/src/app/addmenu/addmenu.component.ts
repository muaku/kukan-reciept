import { Component, OnInit } from '@angular/core';

import { MenuService } from "../main/menu.service"
import { Menu } from "../main/menu"

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {

	menus = [];
	name: string;
	price: number;


  constructor(private _menuService: MenuService) { }

  ngOnInit() {
  }


  addMenu(){
    let data = {"name": this.name, "price": this.price}
  	
    this._menuService.addMenu(data)
          .subscribe(menu => console.log(menu),  // Emit event here to notify another component
            err => console.log(err))
  }
  
}
