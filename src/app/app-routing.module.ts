// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminPageComponent } from './admin/pages/dashboard-admin-page/dashboard-admin-page.component';
import { CategoryAdminPageComponent } from './admin/pages/category-admin-page/category-admin-page.component';
import { ProductAdminPageComponent } from './admin/pages/product-admin-page/product-admin-page.component';
import { BrandAdminPageComponent } from './admin/pages/brand-admin-page/brand-admin-page.component';
import { BlogAdminPageComponent } from './admin/pages/blog-admin-page/blog-admin-page.component';
import { OrderAdminPageComponent } from './admin/pages/order-admin-page/order-admin-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard-admin', pathMatch: 'full' },
  { path: 'dashboard-admin', component: DashboardAdminPageComponent, title: 'Dashboard Admin' },
  { path: 'category-admin', component: CategoryAdminPageComponent, title: 'Manage Category' },
  { path: 'product-admin', component: ProductAdminPageComponent, title: 'Manage Product' },
  { path: 'order-admin', component: OrderAdminPageComponent, title: 'Manage Order' },
  { path: 'brand-admin', component: BrandAdminPageComponent, title: 'Manage Brand' },
  { path: 'blog-admin', component: BlogAdminPageComponent, title: 'Manage Blog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
