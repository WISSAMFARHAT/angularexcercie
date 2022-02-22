import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient,private router:Router) {}
  
  public userStatus!: string;
  public userStatuschange:BehaviorSubject<string>=new BehaviorSubject<string>(this.userStatus);


  setUserStatus(userStatus:any):void
  {
    this.userStatus=userStatus;
    this.userStatuschange.next(userStatus);
  }


  loginuser(email:string,pwd:string)
    {

    /*  const headers=new HttpHeaders().set('Content-Type','application/json');
      let user=
      {
        email:email,
        pwd:pwd
      }*/
      this.httpclient.get('http://localhost:3000/token/sign').subscribe((res:any)=>{
         
        localStorage.setItem("access_token",res["token"]);
        this.setUserStatus(res["token"])
        this.router.navigate(["/"])
      });


    }


    logout(){
      localStorage.removeItem("access_token");
      this.setUserStatus(null);
    }
}
