import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { PageNotFountComponent } from './notfound.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login', loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'sigdre', loadChildren: './sigdre/sigdre.module#SigdreModule'
    },
    {
        path: 'error', component: PageNotFountComponent
    },
    {
        path: '**', component: PageNotFountComponent
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
