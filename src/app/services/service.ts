import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { json } from 'body-parser';
import { Console } from 'console';
import { Router } from 'express';
import { Observable } from 'rxjs/internal/Observable';
import dbproduct from '../../../model/product.json';
import dbuser from '../../../model/user.json';
import product from '../models/product';
import Product from '../models/product';
import User from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class Service {

 
  constructor(private httpclient:HttpClient) { }


    getallproduct() : Observable<Product[]>
    { 
      return this.httpclient.get<Product[]>("http://localhost:3000/product");

    }

    getproduct(id:number)
    {
      return this.httpclient.get<Product>("http://localhost:3000/product/"+id);

    }
    

    loginuser(email:string,pwd:string)
    {
      
      const headers=new HttpHeaders().set('Content-Type','application/json');
      let user=
      {
        email:email,
        pwd:pwd
      }
        
      return  this.httpclient.post('http://localhost:3000/login',user,{headers});


    }

    adduser(user:User)
    {
      const headers=new HttpHeaders().set('Content-Type','application/json');
      return  this.httpclient.post('http://localhost:3000/user/adduser',JSON.stringify(user),{headers});
         
    }

}
