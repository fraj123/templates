import {Component,Inject,forwardRef} from '@angular/core';
import {SigdreComponent} from './sigdre.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div class="topbar-left">            
                <div class="logo"></div>
            </div>

            <div class="topbar-right">
                <a id="menu-button" href="#" (click)="app.onMenuButtonClick($event)">
                    <i></i>
                </a>
                
                <a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
                    <i class="material-icons">menu</i>
                </a>
                <ul class="topbar-items animated fadeInDown" [ngClass]="{'topbar-items-visible': app.topbarMenuActive}">
                    <li #profile class="profile-item" *ngIf="app.profileMode==='top'||app.isHorizontal()"
                        [ngClass]="{'active-top-menu':app.activeTopbarItem === profile}">

                        <a href="#" (click)="app.onTopbarItemClick($event,profile)">                            
                            <div class="profile-image"></div>
                            <span class="topbar-item-name">Jane Williams</span>
                        </a>
                        
                        <ul class="ultima-menu animated fadeInDown">
                            <li role="menuitem">
                                <a routerLink="/sigdre/profile">
                                    <i class="material-icons">person</i>
                                    <span>Perfil</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="./">
                                    <i class="material-icons">power_settings_new</i>
                                    <span>Salir</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class AppTopBar {

    constructor(@Inject(forwardRef(() => SigdreComponent)) public app:SigdreComponent) {}

}