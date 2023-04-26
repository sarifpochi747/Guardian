import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon'


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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'menu/organization', component: OrganizationPageComponent },
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
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    [RouterModule.forRoot(routes)
  ]
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule { }
