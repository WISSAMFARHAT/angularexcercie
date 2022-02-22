import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import User from 'src/app/models/user';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginform=new FormGroup({
    email:new FormControl('',[Validators.required]),
    pwd:new FormControl('',[Validators.required]),
    cfpwd:new FormControl('',[Validators.required]),
    first_name:new FormControl('',[Validators.required]),
    last_name:new FormControl('',[Validators.required]),
    copany:new FormControl(),
    mobile:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
  });
  constructor(private service:Service) { }

  ngOnInit(): void {
  }

   generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
  submit() {
   /* if(this.loginform.valid)
    {
        this.service.adduser(new User(
          this.generateUUID(),
          ""+this.loginform.get('email'),
          ""+this.loginform.get('pwd'),
          ""+this.loginform.get('first_name'),
          ""+this.loginform.get('last_name'),
          ""+this.loginform.get('copany'),
          ""+this.loginform.get('mobile'),
          ""+this.loginform.get('address'),""));
          this.loginform.reset(this.loginform.value);
    }else
    {
      console.log("invalid");   

    }*/
    
  }
}
