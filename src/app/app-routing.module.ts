import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path: '' ,component:ProductsComponent},
  {path: 'products' ,component:ProductsComponent},
  {path: 'detail/:id' ,component:ProductdetailsComponent},
  {path: 'cart' ,component:CartComponent},
  {path: 'login' ,component:LoginComponent},
  {path: 'profile' ,component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
