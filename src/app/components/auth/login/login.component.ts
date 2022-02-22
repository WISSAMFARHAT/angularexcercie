import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Service } from 'src/app/services/service';
import { AuthService } from 'src/app/services/auth.service'
import jwt from '@auth0/angular-jwt';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginform=new FormGroup({
      email:new FormControl('',[Validators.required]),
      pwd:new FormControl('',[Validators.required])
  });
  constructor(private service:Service,private authService:AuthService) { }

  ngOnInit(): void {

  }

  get email():any
  {
    return this.loginform.get('email');
  }
  get pwd():any
  {
    return this.loginform.get('pwd');
  }
  submit() {
    if(this.loginform.valid)
    {
        const users=this.loginform.get('email')?.value;
        const pwds=this.loginform.get('pwd')?.value;

          var user=this.service.loginuser(users,pwds);
          if(user.length>0)
          {
            this.authService.loginuser(users,pwds);
            
          }
        
      }else
      {
        console.log("invalid");
      }
    
    
  }

}
