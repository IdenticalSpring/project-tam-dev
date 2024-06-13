import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminPageComponent } from './admin/pages/dashboard-admin-page/dashboard-admin-page.component';
import { CategoryAdminPageComponent } from './admin/pages/category-admin-page/category-admin-page.component';
import { ProductAdminPageComponent } from './admin/pages/product-admin-page/product-admin-page.component';
import { BrandAdminPageComponent } from './admin/pages/brand-admin-page/brand-admin-page.component';
import { BlogAdminPageComponent } from './admin/pages/blog-admin-page/blog-admin-page.component';
import { OrderAdminPageComponent } from './admin/pages/order-admin-page/order-admin-page.component';
import { DashboardOwnerPageComponent } from './owner/pages/dashboard-owner-page/dashboard-owner-page.component';
import { CategoryOwnerPageComponent } from './owner/pages/category-owner-page/category-owner-page.component';
import { ProductOwnerPageComponent } from './owner/pages/product-owner-page/product-owner-page.component';
import { BrandOwnerPageComponent } from './owner/pages/brand-owner-page/brand-owner-page.component';
import { BlogOwnerPageComponent } from './owner/pages/blog-owner-page/blog-owner-page.component';
import { OrderOwnerPageComponent } from './owner/pages/order-owner-page/order-owner-page.component';
import { DashboardStaffPageComponent } from './staff/pages/dashboard-staff-page/dashboard-staff-page.component';
import { CategoryStaffPageComponent } from './staff/pages/category-staff-page/category-staff-page.component';
import { ProductStaffPageComponent } from './staff/pages/product-staff-page/product-staff-page.component';
import { BrandStaffPageComponent } from './staff/pages/brand-staff-page/brand-staff-page.component';
import { BlogStaffPageComponent } from './staff/pages/blog-staff-page/blog-staff-page.component';
import { OrderStaffPageComponent } from './staff/pages/order-staff-page/order-staff-page.component';
// import { UnauthorizedComponent } from './unauthorized/unauthorized.component'; // Assume you have this component

const routes: Routes = [
  { path: '', redirectTo: '/dashboard-admin', pathMatch: 'full' },

  // Admin routes
  { path: 'dashboard-admin', component: DashboardAdminPageComponent, title: 'Dashboard Admin' },
  { path: 'category-admin', component: CategoryAdminPageComponent, title: 'Manage Category' },
  { path: 'product-admin', component: ProductAdminPageComponent, title: 'Manage Product' },
  { path: 'order-admin', component: OrderAdminPageComponent, title: 'Manage Order' },
  { path: 'brand-admin', component: BrandAdminPageComponent, title: 'Manage Brand' },
  { path: 'blog-admin', component: BlogAdminPageComponent, title: 'Manage Blog' },

  // Owner routes
  { path: 'dashboard-owner', component: DashboardOwnerPageComponent, title: 'Dashboard Owner' },
  { path: 'category-owner', component: CategoryOwnerPageComponent, title: 'Manage Category' },
  { path: 'product-owner', component: ProductOwnerPageComponent, title: 'Manage Product' },
  { path: 'order-owner', component: OrderOwnerPageComponent, title: 'Manage Order' },
  { path: 'brand-owner', component: BrandOwnerPageComponent, title: 'Manage Brand' },
  { path: 'blog-owner', component: BlogOwnerPageComponent, title: 'Manage Blog' },

  // Staff routes
  { path: 'dashboard-staff', component: DashboardStaffPageComponent, title: 'Dashboard Staff' },
  { path: 'category-staff', component: CategoryStaffPageComponent, title: 'Manage Category' },
  { path: 'product-staff', component: ProductStaffPageComponent, title: 'Manage Product' },
  { path: 'order-staff', component: OrderStaffPageComponent, title: 'Manage Order' },
  { path: 'brand-staff', component: BrandStaffPageComponent, title: 'Manage Brand' },
  { path: 'blog-staff', component: BlogStaffPageComponent, title: 'Manage Blog' },

  // Unauthorized page
  // { path: 'unauthorized', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
