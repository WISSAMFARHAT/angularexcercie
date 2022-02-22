import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Service } from 'src/app/services/service';

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
  constructor(private service:Service) { }

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
      var user=this.service.loginuser(this.loginform.get('email')?.value,this.loginform.get('pwd')?.value);
      if(user.length>0)
      {
        console.log('done');
        localStorage.setItem('user', JSON.stringify(user));
        
      }else
      {

      }
    }else
    {
        

    }
    
  }

}
