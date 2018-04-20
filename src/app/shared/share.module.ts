import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ErrorsComponent } from './errors/errors.component';





@NgModule({
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