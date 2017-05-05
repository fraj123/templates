import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SelectItem} from 'primeng/primeng';

@Component({
    templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit {

    constructor(private router: Router) { }
    
    ngOnInit() {
        let cargo = JSON.parse(localStorage.getItem('cargo')).cargo;
        if (cargo != 1) {
            this.router.navigate(['sigdre']);   
        }
    }
}