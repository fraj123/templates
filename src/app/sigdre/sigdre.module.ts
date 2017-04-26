import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigdreRoutes } from './sigdre.routes';

import { Dashboard } from './home/view/dashboard'

@NgModule({
    imports: [
        SigdreRoutes
    ],
    declarations: [
        Dashboard
    ],
    providers:[

    ]
})

export class SigdreModule{}
