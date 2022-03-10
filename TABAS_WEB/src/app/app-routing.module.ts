import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './register/register.component'
import { BaggageComponent } from './baggage/baggage.component'
import { BagcartsComponent } from './bagcarts/bagcarts.component'
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  {path: '' , component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'baggage', component: BaggageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'bagcarts', component: BagcartsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
