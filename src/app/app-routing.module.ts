import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFountComponent } from './notfound.component';


const appRoutes: Routes = [
    {
        path: '',   
        redirectTo: '/login', pathMatch: 'full' 
    },
    {
        path: 'login', 
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'sigdre', 
        loadChildren: './sigdre/sigdre.module#SigdreModule'
    },
    {
        path: '**', 
        component: PageNotFountComponent
    },
    {
        path: 'error', 
        component: PageNotFountComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}