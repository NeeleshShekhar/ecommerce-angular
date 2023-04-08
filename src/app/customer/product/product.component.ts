import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  data: any[] = []
  constructor(private _service: AdminService) {

  }
  ngOnInit() {
    this._service.getProducts().subscribe((res: any) => {
      console.log(res)
      this.data = res
    })
  }
  addToCart(i: any) {
    console.log("hello")
    if (localStorage.getItem('userObj') != null) {

      let user: any = JSON.parse(localStorage.getItem('userObj')!)

      let obj = {

    
        productName: this.data[i].name,
        productId: JSON.stringify(this.data[i].id),
        quantity: 1,
        price: this.data[i].price,
        discount: this.data[i].discountPercent,
        createdAt: new Date(),
        userId: user?.id,
        createdBy: user?.email
      }
      this._service.addToCart(obj).subscribe((res: any) => {
        console.log(res)
      })


    }

  }
}
