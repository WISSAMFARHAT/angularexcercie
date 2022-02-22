import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Router } from 'express';
import dbproduct from '../../../model/product.json';
import dbuser from '../../../model/user.json';
@Injectable({
  providedIn: 'root'
})
export class Service {

 
  constructor() { }


    getallproduct()
    { 
      return dbproduct;

    }

    getproduct(id:number)
    {
      
        return (dbproduct.Products.filter(x=>x.id==id));

    }
    

    loginuser(email:string,pwd:string)
    {
        return(dbuser.user.filter(x=>x.email==email && x.pwd==pwd)); 
    }
/*
    adduser(user:User)
    {
      
      
      db.user.push({id:2,email:user.email,pwd:user.pwd,first_name:user.first_name,last_name:user.last_name,company:user.company,mobile:user.mobile,address:user.address,image:user.image});
       
      
    }
*/
}
