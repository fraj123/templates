import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Cargo } from '../singletons/cargos';

import { Observable }     from "rxjs";

import { AppSetting } from "../../../constantes/const";

@Injectable()
export class CargosService{

    /*
    Constantes de conexion a la API
    */
    private cargosApi = AppSetting.API_ENDPOINT + 'cargos';

    constructor(private http: Http){
        
    }

    getCargosList(): Promise<Cargo[]>{
        return this.http.get(this.cargosApi)
        .toPromise()
        .then(res => <Cargo[]> res.json().cargos)
        .then(data => { return data; })
        .catch(this.handleError);
    }

    getCargos(): Observable<Cargo[]>{
        return this.http
            .get(this.cargosApi)
            .map(this.extractCargosData)
            .catch(this.handleError);
    }

    private extractCargosData(res: Response) {
        let body = res.json();
        return body.cargos || { };
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