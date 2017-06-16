/**
 * Importacion de librerias standart de Angular2
 */
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';

/**
 * Importacion de los Models
 */
import { Privilegio } from '../singletons/privilegios';

/**
 * Importacion de Librerias
 */
import { Observable }       from "rxjs";
import { ReplaySubject }    from 'rxjs/Rx';

/**
 * Importacion de constantes de conexion
 */
import { AppSetting } from "../../../constantes/const";

@Injectable()
export class PrivilegiosService{

    private privilegiosSubject: Subject<Privilegio[]>;
    private privilegiosRequest: Observable<Privilegio[]>;

    /*
    Constantes de conexion a la API
    */
    private privilegiosAPI      = AppSetting.API_ENDPOINT + 'privilegios';
    private privilegiosSaveAPI  = AppSetting.API_ENDPOINT + 'privilegios_add';
    private privilegiosEditAPI  = AppSetting.API_ENDPOINT + 'usuarios_edit';

    constructor(private http: Http){
        this.privilegiosSubject = new ReplaySubject(1);
        //private subject: Subject<any> = new ReplaySubject<any>(1);
    }

    /**
     * obtener todos los registros de privilegios
     */
    getPrivilegios(){
        this.privilegiosRequest = this.http
            .get(this.privilegiosAPI)
            .map(res => res.json().privilegios);

        this.privilegiosRequest.subscribe(
            result => this.privilegiosSubject.next(result),
            err => this.privilegiosSubject.error(err)
        );

        return this.privilegiosSubject.asObservable();
    }

    /**
     * Metodo para ingresar a sistema un nuevo privilegio
     * @param name 
     */
    savePrivilegio(name:string): Observable<Privilegio>{
        let body = JSON.stringify({name});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });


        return this.http
            .post(this.privilegiosSaveAPI, body, options)
            .map((response: Response) => response.json().error)
            .catch(this.handleError);
    }

    /**
     * Metodo para editar los parametros de un registro
     * @param id 
     * @param name 
     */
    saveEditPrivilegios(id: number, name: string): Observable<Privilegio>{
        let body = JSON.stringify({name});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this.privilegiosEditAPI+"/"+id, body, options)
            .map((response: Response) => response.json().error)
            .catch(this.handleError);
    }

    /**
     * Recuperacion del error
     */
    private handleError(error: any){
        let errorMsge = (error.message) ? error.message:
        error.status ? `${error.status} - ${error.statusText}`: 'Error en el Servidor';
        console.log(errorMsge);
        return Observable.throw(errorMsge);
    }
} 