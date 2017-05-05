import {Component,OnInit} from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';

@Component({
    templateUrl: './profile.html'
})
export class Profile implements OnInit {

    imageProfilePath: string;
    nombre: string;
    paterno: string;
    materno: string;
    email: string;

    msgs: Message[];
    
    uploadedFiles: any[] = [];

    constructor() { }

    display: boolean = false;

    showDialog() {
        this.display = true;
    }
    
    ngOnInit() {
        this.imageProfilePath = "/assets/layout/images/profile.jpg";    
        console.log(JSON.parse(localStorage.getItem('usuario')));
        this.nombre = JSON.parse(localStorage.getItem('usuario')).usuario.usuario.nombres;
        this.paterno = JSON.parse(localStorage.getItem('usuario')).usuario.usuario.paterno;
        this.materno = JSON.parse(localStorage.getItem('usuario')).usuario.usuario.materno;
        this.email = JSON.parse(localStorage.getItem('usuario')).usuario.usuario.email;
    }

    onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
        
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}