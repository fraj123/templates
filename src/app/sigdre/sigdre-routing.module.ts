import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigdreComponent } from './sigdre.component';

const sigdreRoutes: Routes = [
    {
        path: 'sigdre', 
        component: SigdreComponent,
        children: [
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