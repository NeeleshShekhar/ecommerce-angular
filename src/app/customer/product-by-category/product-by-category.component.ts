import { Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.scss']
})
export class ProductByCategoryComponent {
  data: any[] = []
  constructor(private _service: AdminService, private _activated: ActivatedRoute,
    private router:Router,private _toaste:ToastrService) {

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
  addToCart(item: any) {
    console.log("hello")
    if (localStorage.getItem('userObj') != null) {

      let user: any = JSON.parse(localStorage.getItem('userObj')!)

      let obj = {

    
        productName: item.name,
        productId: JSON.stringify(item.id),
        quantity: 1,
        price: item.price,
        discount: item.discountPercent,
        createdAt: new Date(),
        userId: user?.id,
        image:item.imageURL,
        rating:item.rating,
        createdBy: user?.email
      }
      this._service.addToCart(obj).subscribe((res: any) => {
        console.log(res)
        this._toaste.success("Item added to cart!!")
        this.router.navigateByUrl('customer/cart')
      })


    }
    else
    this._toaste.error("Please log in to add item to cart")

  }

  addToWishlist(item: any){
    if (localStorage.getItem('userObj') != null) {

      let user: any = JSON.parse(localStorage.getItem('userObj')!)

      let obj = {

    
        productName: item.name,
        productId: JSON.stringify(item.id),
        quantity: 0,
        price: item.price,
        discount: item.discountPercent,
        createdAt: new Date(),
        userId: user?.id,
        image:item.imageURL,
        rating:item.rating,
        createdBy: user?.email
      }
      this._service.addToWishlist(obj).subscribe((res: any) => {
        console.log(res)
        this._toaste.success("Item added to Wishlist!!")
        this.router.navigateByUrl('customer/wishlist')
      })


    }
    else
    this._toaste.error("Please log in to add item to wishlist")
  }
  userFilter: any = { name: '' };
  search:any
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
