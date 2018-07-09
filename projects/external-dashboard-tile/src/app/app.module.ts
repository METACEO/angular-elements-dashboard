import {NgModule, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {BrowserModule} from '@angular/platform-browser';

import {ExternalDashboardTileComponent} from './external-dashboard-tile/external-dashboard-tile.component';

@NgModule({
  imports: [
    BrowserModule,
    MatCardModule,
    MatTableModule,
  ],
  declarations: [
    ExternalDashboardTileComponent
  ],
  bootstrap: [],
  entryComponents: [
    ExternalDashboardTileComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const externalTileCE = createCustomElement(ExternalDashboardTileComponent, {injector: this.injector});
    customElements.define('external-dashboard-tile', externalTileCE);
  }

}
