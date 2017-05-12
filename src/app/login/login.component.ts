import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [LoginService]
})

export class LoginComponent {

  message: string;
    public loginIncorrect: boolean;

    //@Output() incorrect: EventEmitter<any>;
    constructor(
        private router: Router,
        private loginService: LoginService,
    ) {
    //this.incorrect = new EventEmitter();
    }

    loginUser(email:string, password: string){
        this.message = 'Conectando...';
        if(!email || !password){
            return;
        } else{
            //this.router.navigate(['sigdre']);
            this.loginService.loginUser(email, password)
                .subscribe(()=>{
                    console.log(this.loginService.loggedIn);
                    console.log(localStorage);
                    if(this.loginService.loggedIn){
                        this.loginIncorrect = false;
                        let cargo = JSON.parse(localStorage.getItem('cargo')).cargo;
                        switch (cargo) {
                            case 1:
                                this.router.navigate(['sigdre']);       
                                break;
                            case 2:
                                this.router.navigate(['sigdre', 'dashboardEmergencias']);       
                                break;
                            default:
                                break;
                        }
                    } else{
                        this.loginIncorrect = true;
                        this.router.navigate(['']);
                    }
                });
            }
    }

}
