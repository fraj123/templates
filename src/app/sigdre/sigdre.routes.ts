import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SigdreComponent } from './sigdre.component';
import { Dashboard } from './home/view/dashboard';

export const routes: Routes =[
    { 
        path: '', component: SigdreComponent, 
        children: [
            { path: '', component: Dashboard}
        ]
    }
];

export const SigdreRoutes: ModuleWithProviders = RouterModule.forChild(routes);
