import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigdreComponent } from './sigdre.component';

import { Dashboard } from './home/view/dashboard';
import { DashboardEmergencias } from './home/view/dashboardEmergencias';
import { Profile } from './home/view/profile';
import { Users } from './home/view/users';
import { Cargos } from './home/view/cargos';
import { Privilegios } from './home/view/privilegios';
import { Casos } from './home/view/casosemer';

const sigdreRoutes: Routes = [
    {
        path: 'sigdre', 
        component: SigdreComponent,
        children: [
            { path: '', component: Dashboard },
            { path: 'dashboardEmergencias', component: DashboardEmergencias},
            { path: 'usuarios', component: Users},
            { path: 'profile', component: Profile},
            { path: 'cargos', component: Cargos},
            { path: 'privilegios', component: Privilegios},
            { path: 'casos', component: Casos},
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