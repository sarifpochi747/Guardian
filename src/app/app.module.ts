import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login_page/login.component';
import { HeroSectionComponent } from './home_page/hero-section/hero-section.component';
import { PurposeComponent } from './home_page/purpose/purpose.component';
import { StandardComponent } from './home_page/standard/standard.component';
import { QuoteComponent } from './home_page/quote/quote.component';
import { UserSubmitComponent } from './home_page/user-submit/user-submit.component';
import { HomeComponent } from './home_page/home.component';
import { MenuPageComponent } from './menu_page/menu-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuPageComponent },
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
    HomeComponent,
    MenuPageComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule { }
