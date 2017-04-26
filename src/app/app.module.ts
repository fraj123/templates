import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';

import { SigdreModule } from './sigdre/sigdre.module';

import {AppComponent} from './app.component';
import {PageNotFountComponent} from './notfound.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
    HttpModule,
    SigdreModule
  ],
  declarations: [
    AppComponent,
    PageNotFountComponent
  ],
  providers: [
    
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
