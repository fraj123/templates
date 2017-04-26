import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Dashboard } from './home/view/dashboard';

export const routes: Routes =[
    { path: '', component: Dashboard},
    { path: 'dashboard', component: Dashboard }
]

export const SigdreRoutes: ModuleWithProviders = RouterModule.forChild(routes);
