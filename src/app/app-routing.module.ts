import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarformComponent } from './components/carform/carform.component';
import { CartableComponent } from './components/cartable/cartable.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cartable', component:CartableComponent},
  {path: 'cars', component:CarformComponent},
  {path: 'cars/:id', component:CarformComponent},
  {path: '**', component: NotfoundComponent}


   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
