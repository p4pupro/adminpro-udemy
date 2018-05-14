import { PAGES_ROUTES } from './../pages/pages.routes';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from './../services/service.index';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';


const swal: SweetAlert = _swal as any;



declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;


  constructor( public _usuarioServices: UsuarioService,
               public router: Router
              ) {}

  sonIguales(campo1: string, campo2: string) {
    return ( group: FormGroup) => {

      // tslint:disable-next-line:prefer-const
      let pass1 = group.controls[campo1].value;
      // tslint:disable-next-line:prefer-const
      let pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }

  ngOnInit() {
    init_plugins();


    this.forma = new FormGroup({
      nombre: new FormControl(null, [Validators.max(60), Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.min(6)]),
      password2: new FormControl(null, [Validators.required, Validators.min(6)]),
      condiciones: new FormControl(false),
    }, {validators: this.sonIguales('password', 'password2') });
  }


  registrarUsuario() {
    if (this.forma.invalid) {
      return;
    }

    if (this.forma.value.condiciones === false) {
      swal('Importante', 'Debe aceptar las condiciones', 'warning');
      return;
    }

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password
    );

    this._usuarioServices.crearUsuario(usuario)
      .subscribe(resp => this.router.navigate(['/login']));
  }

}
