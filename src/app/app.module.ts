import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

import {Router} from '@angular/router';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {SigdreModule} from './sigdre/sigdre.module';
import { LoginModule } from './login/login.module';
import {PageNotFountComponent} from './notfound.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SigdreModule,
    LoginModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFountComponent
  ],
  providers: [
    
  ],
  bootstrap:[AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
