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

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminPageComponent,
    ThemeCustomizerComponent,
    FooterComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,


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
