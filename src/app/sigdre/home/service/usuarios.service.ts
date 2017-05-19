import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
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

    getUsuarios(): Promise<Usuario[]>{
        return this.http.get(this.usuariosApi)
        .toPromise()
        .then(res => <Usuario[]> res.json().usuarios)
        .then(data => { return data; });
    }

    saveUsuarios(cargo:number, nombres: string, paterno: string, materno: string, email: string){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.usuariosApi, { name }, options)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
} 