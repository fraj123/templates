/**
 * Librerias Standart de Angular2
 */
import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

/**
 * Librerias de PrimeNG
 */
import {SelectItem} from 'primeng/primeng';
import {Message} from 'primeng/primeng';

/**
 * Importacion de Singletons
 */
import { Privilegio } from '../singletons/privilegios';

/**
 * Importacion de Servicios
 */
import { PrivilegiosService } from '../service/privilegios.service';

@Component({
    templateUrl: './privilegios.html',
    providers: [ 
        PrivilegiosService
    ]
})
export class Privilegios implements OnInit {

    dialogDisplay: boolean;

    privilegio: Privilegio = new PrimePrivilegios();

    selectedPrivilegio: Privilegio;

    newPrivilegio: boolean;

    privilegios: Privilegio[];


    submitted = false;

    msgs: Message[] = [];

    msgeSuccess: string;

    constructor(
        private router: Router,
        private privilegiosService: PrivilegiosService
    ) { }
    
    ngOnInit() {
        let cargo = JSON.parse(localStorage.getItem('cargo')).cargo;
        if (cargo != 1) {
            this.router.navigate(['sigdre']);   
        }

        this.getPrivilegios();
    }

    getPrivilegios(){
        this.privilegiosService.getPrivilegios().subscribe(
            privilegios => this.privilegios = privilegios);
    }

    /**
     * Metodos de Adicion en Interfaz
     */
    showDialogToAdd(){
        this.newPrivilegio = true;
        this.privilegio = new PrimePrivilegios();
        this.dialogDisplay = true;
    }

    onSubmit() { this.submitted = true; }

    /**
     * Metodo para la seleccion de columna en la edicion de privilegios
     * @param event 
     */
    onRowSelect(event){
        this.newPrivilegio = false;
        this.privilegio = this.cloneUser(event.data);
        this.dialogDisplay = true;
    }

    /**
     * Metodo para capturar los datos de cada columna
     * @param u 
     */
    cloneUser(u: Privilegio): Privilegio{
        let privilegio = new PrimePrivilegios();
        for(let prop in u){
            privilegio[prop] = u[prop];
            console.log(privilegio[prop]);
        }
        return privilegio;
    }

    /**
     * Metodo para obtener el ID de la columna seleccionada
     */
    findSelectColumIndex(): number{
        return this.privilegios.indexOf(this.selectedPrivilegio);
    }

    /**
     * Metodo para guardar un registro
     */
    saveRegistro(id, nombre) {

        let privilegios = [...this.privilegios];

        if (this.newPrivilegio) {
            this.privilegiosService.savePrivilegio(nombre)
                .subscribe(
                    privilegios => this.privilegios.push(this.privilegio),
                );
        } else{
            privilegios[this.findSelectColumIndex()] = this.privilegio;
            this.privilegiosService.saveEditPrivilegios(id, nombre)
                .subscribe(
                    success => this.msgeSuccess = "Los cambios se guardaron correctamente"
                );
        }
        this.privilegio = null;
        this.dialogDisplay = false;
    }
    
    /**
     * Cancelar accion en la interfaz grafica
     */
    cancelar(){
        this.newPrivilegio =false;
        this.privilegio = null;
        this.dialogDisplay = false;
    }
}

/**
 * PrimePrivilegios
 */
class PrimePrivilegios implements Privilegio {

    constructor(
        public id?, 
        public name?, 
        public updated_at?, 
        public created_at?) {
        
    }
}