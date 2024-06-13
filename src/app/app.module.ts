import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardAdminPageComponent } from './admin/pages/dashboard-admin-page/dashboard-admin-page.component';
import { AdminModule } from './admin/admin.module';
import { ThemeCustomizerComponent } from './layout/theme-customizer/theme-customizer.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { StoreModule } from "@ngrx/store";
import { indexReducer } from "./store/index.reducer";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NgScrollbarModule } from "ngx-scrollbar";
import { IconModule } from "./shared/icon/icon.module";
import { FormsModule } from "@angular/forms";
import { AppService } from "./service/app.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderAdminComponent } from '../shared/components/header-admin/header-admin.component';
import { SidebarAdminComponent } from '../shared/components/sidebar-admin/sidebar-admin.component';
import { AddNewBlogComponent } from './admin/components/blog/add-new-blog/add-new-blog.component';
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminPageComponent,
    ThemeCustomizerComponent,
    FooterComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    DashboardOwnerPageComponent,
    CategoryOwnerPageComponent,
    ProductOwnerPageComponent,
    BrandOwnerPageComponent,
    BlogOwnerPageComponent,
    OrderOwnerPageComponent,
    DashboardStaffPageComponent,
    CategoryStaffPageComponent,
    ProductStaffPageComponent,
    BrandStaffPageComponent,
    BlogStaffPageComponent,
    OrderStaffPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AdminModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({ index: indexReducer }),
    NgScrollbarModule.withConfig({
      visibility: 'hover',
      appearance: 'standard',
    }),
    IconModule,
    FormsModule,

  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
