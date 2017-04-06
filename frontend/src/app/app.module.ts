import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './main/index/index.component';
import { CalcComponent } from './main/calc/calc.component';
import { MenuComponent } from './main/menu/menu.component';
import { OrderlistComponent } from './main/orderlist/orderlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddmenuComponent } from './addmenu/addmenu.component';

import { MenuService } from './main/menu.service'

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'main', component: IndexComponent },
  { path: "orderlist", component: OrderlistComponent},
  { path: "addmenu", component: AddmenuComponent},
  { path: '**', component: IndexComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CalcComponent,
    MenuComponent,
    OrderlistComponent,
    NavbarComponent,
    AddmenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
