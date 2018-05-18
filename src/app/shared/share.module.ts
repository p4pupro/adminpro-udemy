import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ErrorsComponent } from './errors/errors.component';







@NgModule({

    imports: [
      RouterModule,
      CommonModule,
      PipesModule
    ],
    declarations: [
      ErrorsComponent,
      BreadcrumbsComponent,
      HeaderComponent,
      SidebarComponent
    ],
    exports: [
        ErrorsComponent,
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent
    ]
  })
  export class ShareModule { }
