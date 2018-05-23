
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// Guards
import { AdminGuard } from '../services/service.index';
import { LoginGuardGuard } from '../services/service.index';

// Mantenimiento
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';








const pagesRoutes: Routes = [

    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress Bar' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Opciones de la cuenta' } },
            { path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil' } },
            { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
            //Mamtenimietos
            {
              path: 'usuarios',
              component: UsuariosComponent,
              canActivate: [ AdminGuard ],
              data: { titulo: 'Opciones de usuario' }
            },
            { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Opciones de hospital' } },
            { path: 'medicos', component: MedicosComponent, data: { titulo: 'Opciones de médico' } },
            { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar médico' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
