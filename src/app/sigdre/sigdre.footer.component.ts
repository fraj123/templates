import {Component,Inject,forwardRef} from '@angular/core';
import {SigdreComponent} from './sigdre.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer">
            <div class="card clearfix">
                <span class="footer-text-left">Unidad de Alerta Temprana</span>
                <span class="footer-text-right"><span class="ui-icon ui-icon-copyright"></span>  <span>SMGIR</span></span>
            </div>
        </div>
    `
})
export class AppFooter {

}