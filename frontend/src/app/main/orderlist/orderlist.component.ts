import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EmitterService } from '../../emitter.service'
import { Menu } from '../menu'

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

	// Define input properties
	@Input() menu: Menu

  constructor() { }

  ngOnInit() {
  }








}
