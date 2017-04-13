import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { Dashboard } from './sigdre/view/dashboard'
import { Users } from './sigdre/view/users'

export const routes: Routes = [
    {path: '', component: Dashboard},
    {path: 'users', component: Users}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
