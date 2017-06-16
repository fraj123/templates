import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SelectItem} from 'primeng/primeng';

import { Cargo } from '../singletons/cargos';

import { CargosService } from '../service/cargos.service';


@Component({
    templateUrl: './cargos.html',
    providers: [ 
        CargosService
    ]
})
export class Cargos implements OnInit {

    cargos: Cargo[];

    constructor(
        private router: Router,
        private cargosService: CargosService
    ) { }
    
    ngOnInit() {
        let cargo = JSON.parse(localStorage.getItem('cargo')).cargo;
        if (cargo != 1) {
            this.router.navigate(['sigdre']);   
        }

        this.getCargos();
    }

    getCargos(){
        this.cargosService.getCargos().subscribe(
            cargos => this.cargos = cargos
        )
    }
}