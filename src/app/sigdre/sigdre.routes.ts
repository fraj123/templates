import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//import {  } from './sigdre.component';
import { Dashboard } from './home/view/dashboard';

export const MODULE_ROUTES: Route[] =[
    { path: '', component: Dashboard},
    { path: 'dashboard', component: Dashboard }
]

export const MODULE_COMPONENTS = [
    
]
