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
  }
  filterByOrder(value: any) {
    if (this.id == undefined) {
      if (value.value == 1) {
        this._service.getProductByPriceLtoH(0).subscribe((res: any) => {
          console.log(res)
          this.data = res
        })
      }
      else {
        this._service.getProductByPriceHtoL(0).subscribe((res: any) => {
          console.log(res)
          this.data = res
        })
      }
    }
    else{
      if (value.value == 1) {
        this._service.getProductByPriceLtoH(this.id).subscribe((res: any) => {
          console.log(res)
          this.data = res
        })
      }
      else {
        this._service.getProductByPriceHtoL(this.id).subscribe((res: any) => {
          console.log(res)
          this.data = res
        })
      }
    }
  }
}
