import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './sigdre.routes';

import { Dashboard } from './home/view/dashboard'

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ 
        MODULE_COMPONENTS,
        Dashboard
    ],
    providers:[

    ]
})

export class SigdreModule{}
