import {HttpClientModule} from '@angular/common/http';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, PreloadAllModules} from '@angular/router';

import {AppComponent} from './app.component';
import {APP_ROUTES} from './app.routes';
import {DashboardModule} from './dashboard/dashboard.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  declarations: [
    AppComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
