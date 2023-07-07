import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { Routes, RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon'
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login_page/login.component';
import { HeroSectionComponent } from './home_page/hero-section/hero-section.component';
import { PurposeComponent } from './home_page/purpose/purpose.component';
import { StandardComponent } from './home_page/standard/standard.component';
import { QuoteComponent } from './home_page/quote/quote.component';
import { UserSubmitComponent } from './home_page/user-submit/user-submit.component';
import { FooterComponent } from './home_page/footer/footer.component';
import { HomeComponent } from './home_page/home.component';
import { MenuPageComponent } from './menu_page/menu-page.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { OrganizationPageComponent } from './menu_page/organization-page/organization-page.component';
import { ProfileComponent } from './menu_page/profile/profile.component';
import { UserPageComponent } from './menu_page/user-page/user-page.component';
import { OurStandardComponent } from './menu_page/our-standard/our-standard.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from "./shared/auth.guard";
import { AuthGuard2 } from "./shared/auth.guard2";
import { CustomerComponent } from './home_page/customer/customer.component';
import { OurCustomerComponent } from './menu_page/our-customer/our-customer.component';
import { CustomerFormComponent } from './menu_page/our-customer/customer-form/customer-form.component';
import { ImagesOrganizationComponent } from './menu_page/images-organization/images-organization.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent,canActivate: [AuthGuard2] },
  { path: 'menu', component: MenuPageComponent,canActivate: [AuthGuard] },
  { path: 'menu/organization', component: OrganizationPageComponent,canActivate: [AuthGuard] },
  { path: 'menu/profile', component: ProfileComponent,canActivate: [AuthGuard] },
  { path: 'menu/profile/images', component: ImagesOrganizationComponent,canActivate: [AuthGuard] },
  { path: 'menu/ourstandard', component: OurStandardComponent,canActivate: [AuthGuard] },
  { path: 'menu/ourcustomer', component: OurCustomerComponent,canActivate: [AuthGuard] },
  { path: 'menu/user', component: UserPageComponent,canActivate: [AuthGuard] },
  { path: 'menu/ourcustomer', component: OurCustomerComponent,canActivate: [AuthGuard] },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HeroSectionComponent,
    PurposeComponent,
    StandardComponent,
    QuoteComponent,
    UserSubmitComponent,
    FooterComponent,
    HomeComponent,
    MenuPageComponent,
    HeaderUserComponent,
    OrganizationPageComponent,
    ProfileComponent,
    UserPageComponent,
    OurStandardComponent,
    CustomerComponent,
    OurCustomerComponent,
    CustomerFormComponent,
    ImagesOrganizationComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    [RouterModule.forRoot(routes)],
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    NgxDropzoneModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})

export class AppModule { }
