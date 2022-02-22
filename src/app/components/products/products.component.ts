import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items:Product[] | any;
  constructor(private service:Service) { 

  }

  ngOnInit(): void {
    
   
    this.items=this.service.getallproduct().Products;
  }

}
