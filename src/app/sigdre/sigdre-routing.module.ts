import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigdreComponent } from './sigdre.component';

import { Dashboard } from './home/view/dashboard';
import { Users } from './home/view/users';

const sigdreRoutes: Routes = [
    {
        path: 'sigdre', 
        component: SigdreComponent,
        children: [
            { path: '', component: Dashboard },
            { path: 'usuarios', component: Users}
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