import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent {
  data: any[] = []
  id:any
  constructor(private _service: AdminService,
    private router:Router,private _toaste:ToastrService) {

  }
  ngOnInit() {
    this._service.getProducts().subscribe((res: any) => {
      console.log(res)
      this.data = res
    })
  }
 
  gotoAllProducts(){
    this.router.navigateByUrl('customer/all-products')
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
        image:this.data[i].imageURL,
        rating:this.data[i].rating,
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

  addToWishlist(i: any){
    if (localStorage.getItem('userObj') != null) {

      let user: any = JSON.parse(localStorage.getItem('userObj')!)

      let obj = {

    
        productName: this.data[i].name,
        productId: JSON.stringify(this.data[i].id),
        quantity: 0,
        price: this.data[i].price,
        discount: this.data[i].discountPercent,
        createdAt: new Date(),
        userId: user?.id,
        image:this.data[i].imageURL,
        rating:this.data[i].rating,
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
}