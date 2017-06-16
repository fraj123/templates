import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Usuario } from '../singletons/usuarios';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppSetting } from "../../../constantes/const";

@Injectable()
export class UsuariosService{

    /*
    Constantes de conexion a la API
    */
    private usuariosApi     = AppSetting.API_ENDPOINT + 'usuarios';
    private usuariosSave    = AppSetting.API_ENDPOINT + 'usuarios_add';
    private usuariosEdit    = AppSetting.API_ENDPOINT + 'usuarios_edit';

    /*
    Variables de HTTP para desplegar datos en el sistema
    */
    private usersSubjects: Subject<any>;
    private usersRequest: Observable<any>;

    /*
    Variables de estado de operaciones
    */
    public errorEstado: string;

    constructor(private http: Http){
        this.usersSubjects = new Subject();
    }

    getUsuarios(): Observable<Usuario[]>{
        return this.http
            .get(this.usuariosApi)
            .map(this.extractUsuariosData)
            .catch(this.handleError);
    }

    saveUsuario(cargo:number, nombres: string, paterno: string, materno: string, username:string, email: string): Observable<Usuario>{
        let body = JSON.stringify({cargo, nombres, paterno, materno, username, email});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });


        return this.http
            .post(this.usuariosSave, body, options)
            .map((response: Response) => response.json())
            .map(response =>{
                this.errorEstado = response;
                return this.errorEstado;
            })
            .catch(this.handleError);
    }

    saveEditUsuario(id: number, cargo:number, nombres: string, paterno: string, materno: string, username:string, email: string, estado: number): Observable<Usuario>{
        let body = JSON.stringify({cargo, nombres, paterno, materno, username, email, estado});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this.usuariosEdit+"/"+id, body, options)
            .map((response: Response) => response.json())
            .map(response =>{
                this.errorEstado = response;
                return this.errorEstado;
            })
            .catch(this.handleError);
    }

    private extractUsuariosData(res: Response) {
        let body = res.json();
        return body.usuarios || { };
    }

    private extractSaveResponse(res: Response) {
        let body = res.json();
        return body.error || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
    
} 