import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigdreComponent } from './sigdre.component';

import { Dashboard } from './home/view/dashboard';
import { DashboardEmergencias } from './home/view/dashboardEmergencias';
import { Profile } from './home/view/profile';
import { Users } from './home/view/users';

const sigdreRoutes: Routes = [
    {
        path: 'sigdre', 
        component: SigdreComponent,
        children: [
            { path: '', component: Dashboard },
            { path: 'dashboardEmergencias', component: DashboardEmergencias},
            { path: 'usuarios', component: Users},
            { path: 'profile', component: Profile},
            //{ path: '', component: SigdreComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(sigdreRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class SigdreRoutingModule{}