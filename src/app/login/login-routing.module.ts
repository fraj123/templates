import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
    {
        path: '', 
        component: LoginComponent,
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})

export class LoginRoutingModule {}