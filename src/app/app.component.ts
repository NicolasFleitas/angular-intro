import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``]
})


export class AppComponent {

  personas: any = [];

    constructor() {

    }

    miFormulario = new FormGroup({
      username: new FormControl('', Validators.required),
      userpassword : new FormControl('', Validators.required)
    });
}
