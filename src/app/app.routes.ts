import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { Dashboard } from './sigdre/view/dashboard';
import { Login } from './sigdre/view/login';

export const routes: Routes = [
    {path: '', loadChildren: './login/login.module#LoginModule'},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'app', loadChildren: './sigdre/sigdre.module#SigdreModule'},
    {path: 'error', component: Dashboard}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
