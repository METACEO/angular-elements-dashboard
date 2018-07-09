import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {GridsterModule} from 'angular-gridster2';

import {DashboardComponent} from './dashboard.component';
import {DashboardElementComponent} from './element.component';

@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  declarations: [
    DashboardComponent,
    DashboardElementComponent,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
