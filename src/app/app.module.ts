import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, PreloadAllModules} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {APP_ROUTES} from './app.routes';
import {DashboardModule} from './dashboard/dashboard.module';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    BrowserModule,
    DashboardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
