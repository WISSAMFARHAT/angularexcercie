import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:number |any;
  item:Product | any;
  
  constructor(private service:Service,private _Activatedroute:ActivatedRoute) { }
  editform=new FormGroup({
    image:new FormControl('',),
    name:new FormControl('',),
    description:new FormControl('',),
    qt:new FormControl('',),
    price:new FormControl(''),

  });
  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.service.getproduct(this.id).subscribe((pd: any)=>
    {
      this.item=pd[0];
      this.editform.get("qt")?.setValue(this.item.qt);
      this.editform.get("description")?.setValue(this.item.description);
      this.editform.get("name")?.setValue(this.item.title);
      this.editform.get("price")?.setValue(this.item.price);
    });
    
  }

  


  submit()
  {
    if(this.editform.valid)
    {
      const newproduct=new Product(
        this.item[0].id,this.editform.get('name')?.value,
        this.editform.get('description')?.value,this.editform.get('price')?.value,
        "https://storage.googleapis.com/original-marines-outlet/889fb4b3-5a03-40d3-92b3-c3ecb34f563a-1",
        this.editform.get('qt')?.value
      );
      this.service.editproduct(newproduct).subscribe(
        (res:any)=>{
         console.log("done")
        }
      ); 
      
    }

  }
}
