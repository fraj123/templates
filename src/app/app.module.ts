import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppRoutes} from './app.routes';

import {AppComponent} from './app.component';
import {AppMenuComponent, AppSubMenu} from './app.menu.component';
import {AppTopBar} from './app.topbar.component';
import {AppFooter} from './app.footer.component';
import {InlineProfileComponent} from './app.profile.component';

import {CheckboxModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {DataTableModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';
import {ScheduleModule} from 'primeng/primeng';

import { Dashboard } from './sigdre/view/dashboard'
import { Users } from './sigdre/view/users'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes,
    HttpModule,
    BrowserAnimationsModule,
    CheckboxModule,
    PanelModule,
    DropdownModule,
    DataTableModule,
    ChartModule,
    ScheduleModule
  ],
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppSubMenu,
    AppTopBar,
    AppFooter,
    InlineProfileComponent,
    Dashboard,
    Users
  ],
  providers: [
    
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
