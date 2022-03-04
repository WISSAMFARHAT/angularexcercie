import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptorService } from './auth-interceptor.service';
import { ListComponent } from './components/admin/list/list.component';
import { AddComponent } from './components/admin/add/add.component';
import { EditComponent } from './components/admin/edit/edit.component';


export function tokengetter()
{
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
    ProductdetailsComponent,
    CartComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    RegisterComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokengetter
      }
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]

})
export class AppModule { }
