import {Component,OnInit} from '@angular/core';
import {SelectItem} from 'primeng/primeng';

import { Usuario } from '../singletons/usuarios';
import { Cargo } from '../singletons/cargos';

import { UsuariosService } from '../service/usuarios.service';
import { CargosService } from '../service/cargos.service';

@Component({
    templateUrl: './users.html',
    providers: [ 
        UsuariosService,
        CargosService
        ]
})

export class Users implements OnInit {

    dialogDisplay: boolean;

    usuario: Usuario = new PrimeUsers();

    selectedUsuario: Usuario;
    selectedCargo: any;

    newUsuario: boolean;

    usuarios: Usuario[];
    cargos: Cargo[];
    cargosList: SelectItem[];

    filteredCargos: any[];
    cargo: string;

    submitted = false;
    
    constructor(private usuariosService: UsuariosService, private cargosService: CargosService) { }
    
    ngOnInit() {
        this.usuariosService.getUsuarios().then(usuarios => this.usuarios = usuarios);
        this.cargosService.getCargos().then(cargos => this.cargos = cargos);
    }

    showDialogToAdd(){
        this.newUsuario = true;
        this.usuario = new PrimeUsers();
        this.dialogDisplay = true;
    }

    onSubmit() { this.submitted = true; }

    save() {

        let usuarios = [...this.usuarios];

        if (this.newUsuario) {
            this.usuarios.push(this.usuario)
        } else{
            usuarios[this.findSelectUserIndex()] = this.usuario;
        }
    }

    delete(){
        
    }

    onRowSelect(event){
        //console.log(this.usuarios);
        this.newUsuario = false;
        this.usuario = this.cloneUser(event.data);
        this.dialogDisplay = true;
    }

    cloneUser(u: Usuario): Usuario{
        let usuario = new PrimeUsers();
        for(let prop in u){
            usuario[prop] = u[prop];
        }
        return usuario;
    }

    findSelectUserIndex(): number{
        return this.usuarios.indexOf(this.selectedUsuario);
    }
}

/**
 * PrimeUsers
 */
class PrimeUsers implements Usuario {

    constructor(public id?, public paterno?, public materno?, public nombres?, public email?, public id_cargo?, public id_estado?, public updated_at?, public created_at?) {
        
    }
}