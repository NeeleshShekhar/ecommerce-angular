import { Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.scss']
})
export class ProductByCategoryComponent {
  data:any[]=[]
constructor(private _service:AdminService,private _activated:ActivatedRoute){

}
p: number = 1;
value: number = 100;
options: Options = {
  floor: 1000,
  ceil: 90000
};
ngOnInit(){
  this.getAllProduct()
}
getAllProduct(){
  let id=this._activated.snapshot.params['id']
  this._service.getProductsByCatId(id).subscribe((res:any)=>{
    console.log(res)
    this.data=res
  })
}
}
