import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
data:any[]=[]
user:any
constructor(private _service:AdminService,private router:Router,private _toaste:ToastrService){

}

ngOnInit(){
  this.user = JSON.parse(localStorage.getItem('userObj')!)
  this._service.getWishlistByUserId(this.user?.id).subscribe((res:any)=>{
    this.data=res
  })
}

remove(id:any){
  this._service.deleteWishlist(id).subscribe((res:any)=>{
    this._service.getWishlistByUserId(this.user?.id).subscribe((res:any)=>{
      this.data=res
    }) 
  })
}
addToCart(item:any) {
  console.log("hello")
  if (localStorage.getItem('userObj') != null) {

    let user: any = JSON.parse(localStorage.getItem('userObj')!)

    let obj = {

  
      productName: item.productName,
      productId: JSON.stringify(item.id),
      quantity: 1,
      price: item.price,
      discount: item.discount,
      createdAt: new Date(),
      userId: user?.id,
      image:item.image,
      rating:item.rating,
      createdBy: user?.email
    }
    this._service.addToCart(obj).subscribe((res: any) => {
      console.log(res)
      this.remove(item?.id)
      this._toaste.success("Item added to cart!!")
      this.router.navigateByUrl('customer/cart')
    })


  }
  else
  this._toaste.error("Please log in to add item to cart")

}
}
