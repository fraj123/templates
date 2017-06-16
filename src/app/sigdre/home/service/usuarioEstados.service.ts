import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Estados } from '../singletons/usuariosEstados';

import { Observable }     from "rxjs";

import { AppSetting } from "../../../constantes/const";

@Injectable()
export class UsuarioEstadosService{

    /*
    Constantes de conexion a la API
    */
    private estadosApi = AppSetting.API_ENDPOINT + 'usuarios_estados';

    constructor(private http: Http){
        
    }

    getUsuarioEstados(): Observable<Estados[]>{
        return this.http
            .get(this.estadosApi)
            .map(this.extractEstadosData)
            .catch(this.handleError);
    }

    private extractEstadosData(res: Response) {
        let body = res.json();
        return body.estados || { };
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