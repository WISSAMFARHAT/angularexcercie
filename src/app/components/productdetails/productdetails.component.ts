import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productform=new FormGroup({
    size:new FormControl(),
    color:new FormControl(),
    quantiter:new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log("Form Submitted")
    console.log(this.productform.value)
  }

}
