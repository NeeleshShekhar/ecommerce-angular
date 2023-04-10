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
  data: any[] = []
  constructor(private _service: AdminService, private _activated: ActivatedRoute) {

  }
  p: number = 1;
  value: number = 100;
  options: Options = {
    floor: 1000,
    ceil: 90000
  };
  id: any
  ngOnInit() {
    this.getAllProduct()
  }
  getAllProduct() {
    this.id = this._activated.snapshot.params['id']
    if (this.id != undefined) {
      this._service.getProductsByCatId(this.id).subscribe((res: any) => {
        console.log(res)
        this.data = res
      })

    }
    else {
      this._service.getProducts().subscribe((res: any) => {
        console.log(res)
        this.data = res
      })
    }

  }
  filterByStar(value: any) {
    console.log(value.value)
   this.data= this.data.filter(a => a.rating>=value.value);
    console.log(this.data.filter(a => a.rating>=value.value))
  }
  filterByOrder(value: any) {
   
   if(value.value==1){
    this.data.sort((a, b) => (
      // your sort logic
      a.price - b.price // example : order by id
    ));
    console.log(this.data)
   }
   else
   {
    this.data.sort((a, b) => (
      // your sort logic
      b.price - a.price // example : order by id
    ));
   }

      
    
  }
}
