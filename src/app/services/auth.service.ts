import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import e from 'express';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient,private router:Router,public jwtHelper: JwtHelperService) {}
  
  public userStatus!: string;
  public userStatuschange:BehaviorSubject<string>=new BehaviorSubject<string>(this.userStatus);

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    if(token!=null)
    {
    return !this.jwtHelper.isTokenExpired(token);
    }else{
      return false;
    }
  }
  setUserStatus(userStatus:any):void
  {
    this.userStatus=userStatus;
    this.userStatuschange.next(userStatus);
  }


  loginuser(email:string,pwd:string)
    {

      const headers=new HttpHeaders().set('Content-Type','application/json');
      let user=
      {
        email:email,
        pwd:pwd
      }
      this.httpclient.post('http://localhost:3000/token/sign',user,{headers}).subscribe((res:any)=>{
         
        localStorage.setItem("access_token",res["token"]);
        this.setUserStatus(res["token"])
        this.router.navigate(["/"])
      });


    }


    logout(){
      localStorage.removeItem("access_token");
      this.setUserStatus(null);
      this.router.navigate(["/login"])
    }
}
