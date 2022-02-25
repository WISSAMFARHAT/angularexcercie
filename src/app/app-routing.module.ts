import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { RegisterComponent } from './components/auth/register/register.component';


const routes: Routes = [
  {path: '' ,component:ProductsComponent},
  {path: 'products' ,component:ProductsComponent},
  {path: 'detail/:id' ,component:ProductdetailsComponent,canActivate: [AuthGuard]},
  {path: 'cart' ,component:CartComponent,canActivate: [AuthGuard]},
  {path: 'login' ,component:LoginComponent,},
  {path: 'profile' ,component:ProfileComponent,canActivate: [AuthGuard]},
  {path: 'register' ,component:RegisterComponent,},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
  
})
export class AppRoutingModule { }
