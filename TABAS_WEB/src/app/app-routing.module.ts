import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './register/register.component'
import { BaggageComponent } from './baggage/baggage.component'
import { BagcartsComponent } from './bagcarts/bagcarts.component'


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'baggage', component: BaggageComponent},
  {path: 'bagcarts', component: BagcartsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
