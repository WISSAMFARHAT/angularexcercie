import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginform=new FormGroup({
      email:new FormControl(),
      pwd:new FormControl()
  });
  constructor() { }

  ngOnInit(): void {

  }

  submit() {
    console.log("Form Submitted")
    console.log(this.loginform.value)
  }

}
