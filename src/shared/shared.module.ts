import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumComponent } from './components/breadcrum/breadcrum.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';

@NgModule({
  declarations: [
    BreadcrumComponent,
    // SidebarAdminComponent,
    LayoutsComponent,
    // HeaderAdminComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumComponent,
    // SidebarAdminComponent,
    // HeaderAdminComponent
  ],
  providers: []
})
export class SharedModule { }
