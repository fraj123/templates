import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';

@Component({
    templateUrl: './login.html',
    styleUrls: ['./login.less'],
    providers: [LoginService]
})
export class Login {
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
        this.loginService.loginUser(email, password)
            .subscribe(()=>{
                console.log(this.loginService.loggedIn);
                if(this.loginService.loggedIn){
                    this.loginIncorrect = false;
                    this.router.navigate(['dashboard']);
                } else{
                    this.loginIncorrect = true;
                    this.router.navigate(['']);
                }
            });
        }
    }
}