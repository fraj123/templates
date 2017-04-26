import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigdreRoutes } from './sigdre.routes';

import { Dashboard } from './home/view/dashboard'

import { SigdreComponent } from './sigdre.component';

@NgModule({
    imports: [
        SigdreRoutes
    ],
    declarations: [
        Dashboard,
        SigdreComponent
    ],
    providers:[

    ]
})

export class SigdreModule{}
