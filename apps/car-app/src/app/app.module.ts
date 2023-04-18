import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { NewCarComponent } from 'libs/new-car/feature/src';
import { ChangeCarComponent } from 'libs/change-car/feature/src';
import {ServicesTabComponent } from './services-tab/services-tab.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedUiCommonModule} from "@car-app/shared/ui-common";

const routes: Routes = [
  {
    path: 'services',
    component: ServicesTabComponent,
    children: [
      { path: 'new-car', component: NewCarComponent },
      { path: 'change-car', component: ChangeCarComponent },
    ]
  },
  { path:'home', component: HomeTabComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ServicesTabComponent,
    HomeTabComponent,
  ],
  imports: [
    SharedUiCommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [
    MenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
