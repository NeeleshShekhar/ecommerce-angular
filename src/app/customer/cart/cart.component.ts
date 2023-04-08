import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
data:any[]=[]
constructor(private _service:AdminService){

}
user:any
ngOnInit(){
  this.user = JSON.parse(localStorage.getItem('userObj')!)
  this._service.getCartByUserId(3).subscribe((res:any)=>{
    console.log(res)
    this.data=res
  })
}

addOn(item:any){
  
  let obj={
    id:item.id,
    productName: item.productName,
    productId: item.productId,
    quantity: item.quantity+1,
    price: item.price,
    discount: item.discount,
    createdAt: new Date(),
    userId: this.user?.id,
    createdBy: this.user?.email
  }
   this._service.updateCart(obj,item?.id).subscribe((res:any)=>{
    console.log(res)
    this._service.getCartByUserId(3).subscribe((res:any)=>{
      console.log(res)
      this.data=res
    })
   })
}
subOn(item:any){
  if(item.quantity>1)
  {
    let obj={
      id:item.id,
      productName: item.productName,
      productId: item.productId,
      quantity: item.quantity-1,
      price: item.price,
      discount: item.discount,
      createdAt: new Date(),
      userId: this.user?.id,
      createdBy: this.user?.email
    }
     this._service.updateCart(obj,item?.id).subscribe((res:any)=>{
      console.log(res)
      this._service.getCartByUserId(3).subscribe((res:any)=>{
        console.log(res)
        this.data=res
      })
     })
  }
  else
  {
    
  }
 
}
}
