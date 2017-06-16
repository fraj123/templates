import {Component,OnInit} from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {Message} from 'primeng/primeng';

import { Usuario } from '../singletons/usuarios';
import { Cargo } from '../singletons/cargos';
import { Estados } from '../singletons/usuariosEstados';

import { UsuariosService } from '../service/usuarios.service';
import { CargosService } from '../service/cargos.service';
import { UsuarioEstadosService } from '../service/usuarioEstados.service';

@Component({
    templateUrl: './users.html',
    providers: [ 
        UsuariosService,
        CargosService,
        UsuarioEstadosService]
})

export class Users implements OnInit {

    dialogDisplay: boolean;

    usuario: Usuario = new PrimeUsers();

    selectedUsuario: Usuario;
    selectedCargo: any;

    newUsuario: boolean;

    usuarios: Usuario[];
    cargos: Cargo[];
    estados: Estados[];

    cargosList: SelectItem[];

    filteredCargos: any[];
    cargo: string;

    submitted = false;

    msgs: Message[] = [];

    msgeSuccess: string;
    
    constructor(
        private usuariosService: UsuariosService, 
        private cargosService: CargosService,
        private estadosService: UsuarioEstadosService) { }
    
    ngOnInit() {
        this.usuariosService.getUsuarios().subscribe(
            usuarios => this.usuarios = usuarios);
        this.estadosService.getUsuarioEstados().subscribe(
            estados => this.estados = estados);
        this.cargosService.getCargosList().then(cargos => this.cargos = cargos);
    }

    showDialogToAdd(){
        this.newUsuario = true;
        this.usuario = new PrimeUsers();
        this.dialogDisplay = true;
    }

    onSubmit() { this.submitted = true; }

    saveUsuario(id, cargo, nombres, paterno, materno, username, email, estado) {

        let usuarios = [...this.usuarios];

        if (this.newUsuario) {
            this.usuariosService.saveUsuario(cargo, nombres, paterno, materno, username, email)
                .subscribe(
                    usurios => this.usuarios.push(this.usuario),
                    success => this.msgeSuccess = "El usuario se ha registrado correctamente"
                );
            this.showSuccess(this.msgeSuccess);
        } else{
            usuarios[this.findSelectUserIndex()] = this.usuario;
            this.usuariosService.saveEditUsuario(id, cargo, nombres, paterno, materno, username, email, estado)
                .subscribe(
                    success => this.msgeSuccess = "Los cambios se guardaron correctamente"
                );
            this.showSuccess(this.msgeSuccess);
        }
        //this.usuarios = usuarios;
        this.usuario = null;
        this.dialogDisplay = false;
    }

    delete(){
        
    }

    onRowSelect(event){
        this.newUsuario = false;
        this.usuario = this.cloneUser(event.data);
        this.dialogDisplay = true;
    }

    cloneUser(u: Usuario): Usuario{
        let usuario = new PrimeUsers();
        for(let prop in u){
            usuario[prop] = u[prop];
            console.log(usuario[prop]);
        }
        return usuario;
    }

    findSelectUserIndex(): number{
        return this.usuarios.indexOf(this.selectedUsuario);
    }

    showSuccess(msje: string) {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Registro exitoso', detail:'El usuario se ha registrado correctamente'});
    }

    showError() {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Registro fallido', detail:'El usuario no ha sido registrado'});
    }

}

/**
 * PrimeUsers
 */
class PrimeUsers implements Usuario {

    constructor(
        public id?, 
        public paterno?, 
        public materno?, 
        public nombres?, 
        public email?, 
        public id_cargo?, 
        public id_estado?, 
        public updated_at?, 
        public created_at?, 
        public cargos?, 
        public estados?) {
        
    }
}