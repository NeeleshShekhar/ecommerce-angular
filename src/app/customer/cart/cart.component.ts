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
  this._service.getCartByUserId(this.user?.id).subscribe((res:any)=>{
    console.log(res)
    this.data=res
    this.getCartValue()
  })
  this.getAddress()
}
address:any
totalPrice:number=0
discountPrice:number=0
price:number=0

getAddress(){
  this._service.getAddressByuserId(this.user?.id).subscribe((res:any)=>{
 console.log(res)
 this.address=res[0]
  })
}
getCartValue(){
  this.discountPrice=0;
  this.price=0;
  this.totalPrice=0
  this.data?.forEach(element=>{
    console.log("hello")
   this.price+=Number(element?.price)*element?.quantity
   this.discountPrice+=Number(element?.discount)/100*Number(element?.price)
   console.log(this.discountPrice)
  })
  this.totalPrice=this.price-this.discountPrice
  
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
    this._service.getCartByUserId(this.user?.id).subscribe((res:any)=>{
      console.log(res)
      this.data=res
      this.getCartValue()
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
      this._service.getCartByUserId(this.user?.id).subscribe((res:any)=>{
        console.log(res)
        this.data=res
        this.getCartValue()
      })
     })
  }
  else
  {
    
  }
 
}
}
