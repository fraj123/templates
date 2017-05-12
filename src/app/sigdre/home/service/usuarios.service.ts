import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Usuario } from '../singletons/usuarios';

import { Observable }     from "rxjs";

import { AppSetting } from "../../../constantes/const";

@Injectable()
export class UsuariosService{

    /*
    Constantes de conexion a la API
    */
    private usuariosApi = AppSetting.API_ENDPOINT + 'usuarios';

    constructor(private http: Http){
        
    }

    getUsuarios(){
        return this.http.get(this.usuariosApi)
        .toPromise()
        .then(res => <Usuario[]> res.json().usuarios)
        .then(data => { return data; });
    }

    /*
    Recuperacion del error
    */
    private handleError(error: any){
        let errorMsge = (error.message) ? error.message:
        error.status ? `${error.status} - ${error.statusText}`: 'Error en el Servidor';
        console.log(errorMsge);
        return Observable.throw(errorMsge);
    }
} 