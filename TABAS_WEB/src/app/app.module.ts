import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BagcartsComponent } from './bagcarts/bagcarts.component';
import { BaggageComponent } from './baggage/baggage.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BillingComponent } from './billing/billing.component';
import { ConciliationComponent } from './conciliation/conciliation.component';
import { FormsModule } from '@angular/forms';
import { Users } from './model/users';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    BagcartsComponent,
    BaggageComponent,
    LoginComponent,
    NavbarComponent,
    BillingComponent,
    ConciliationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
