import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items=[
    {
      id:1,
      title:"Product 1",
      description:"Description 1",
      image:"https://storage.googleapis.com/original-marines-outlet/889fb4b3-5a03-40d3-92b3-c3ecb34f563a-1",
      price:"100 $",
    },
    {
      id:2,
      title:"Product 2",
      description:"Description 2",
      image:"https://storage.googleapis.com/original-marines-outlet/56649c92-2ad7-4e4d-964c-396218cc2cee-1",
      price:"200 $",
    },
    {
      id:3,
      title:"Product 3",
      description:"Description 3",
      image:"https://storage.googleapis.com/original-marines-outlet/56649c92-2ad7-4e4d-964c-396218cc2cee-1",
      price:"300 $",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}