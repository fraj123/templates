import { Injectable } from '@angular/core';
import { AppSetting } from "../constantes/const";
import { Headers, RequestOptions, Response, Http} from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/Rx';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

  // store the URL of API Rest
  private authURL = AppSetting.API_ENDPOINT + 'auth_login';

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  public loggedIn:boolean = false;

  public token: string;

  public cargo:number;

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.loggedIn = !!localStorage.getItem('token');
  }

  loginUser(email: string, password: string): Observable<boolean> {
    let body = JSON.stringify({email, password});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.authURL, body, options)
      .map((response: Response) => {
      let token = response.json() && response.json().token;
      let usuario = response.json();
      let cargo = response.json() && response.json().usuario.id_cargo;
      console.log(cargo);
      if(token) {
        this.token = token;
        localStorage.setItem('currentUser', JSON.stringify({email: email, token: token}));
        localStorage.setItem('usuario', JSON.stringify({usuario: usuario}));
        localStorage.setItem('cargo', JSON.stringify({cargo: cargo}));
        this.cargo = cargo;
        this.loggedIn = true;
        return Observable.of(true).delay(100).do(val => this.loggedIn = true);
      } else{
        this.loggedIn = false;
        return Observable.of(false).delay(100).do(val => this.loggedIn = false);
      }
      })
      .catch(this.handleError);
  }

  private handleError(error: any){
    let errorMsge = (error.message) ? error.message:
      error.status ? `${error.status} - ${error.statusText}`: 'Error en el Servidor';
    console.log(errorMsge);
    return Observable.throw(errorMsge);
  }

  logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('usuario');
    localStorage.removeItem('cargo');
    this.loggedIn = false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }
}
