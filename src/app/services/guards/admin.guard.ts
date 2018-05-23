import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor( public _usuarioService: UsuarioService ) {

  }
  canActivate() {

if ( this._usuarioService.usuario.role === 'ADMIN_ROLE') {
  return true;
} else {
  console.log('Bloqueado por el DIOS');
  this._usuarioService.logout();
  return false;
}
  }
}
