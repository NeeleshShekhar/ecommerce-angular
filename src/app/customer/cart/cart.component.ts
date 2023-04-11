import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin/admin.service';
import { loadStripe, Stripe } from '@stripe/stripe-js';
// import { Stripe } from '@stripe/stripe-js';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  data: any[] = []
  constructor(private _service: AdminService,
    private _toastr: ToastrService) {

  }
  user: any
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userObj')!)
    this._service.getCartByUserId(this.user?.id).subscribe((res: any) => {
      console.log(res)
      this.data = res
      this.getCartValue()
    })
    this.getOffers()
    this.getAddress()
  }
  address: any[] = []
  totalPrice: number = 0
  discountPrice: number = 0
  price: number = 0
  ad: any

  getAddress() {
    this._service.getAddressByuserId(this.user?.id).subscribe((res: any) => {
      console.log(res)
      this.address = res
    })
  }

  onClick(value: any) {
    this.ad = value.value
    
    console.log(value.value)
  }
  offer: any[] = []
  getOffers() {
    this._service.getOffer().subscribe((res: any) => {
      console.log(res)
      this.offer = res
      this.offer.forEach(ele => {
        let arr = ele.description.split(" ")
        ele["c_amount"] = Number(arr[10])
      })
    })
  }
  offerValid: boolean = false
  isCheck: boolean = false
  c_a: any = 0
  checkOffer(value: any) {
    this.isCheck = true
    console.log(value.value)
    if (value.value?.c_amount <= this.totalPrice) {
      this.offerValid = true
      this.totalPrice -= value.value.amount
      this.c_a = value.value.amount
      this.discountPrice += Number(value.value.amount)
    }

  }
  applyOffer() {

  }
  getCartValue() {
    this.discountPrice = 0;
    this.price = 0;
    this.totalPrice = 0
    this.data?.forEach(element => {
      console.log("hello")
      this.price += Number(element?.price) * element?.quantity
      this.discountPrice += Number(element?.discount) / 100 * Number(element?.price) * element?.quantity
      console.log(this.discountPrice)
    })
    this.totalPrice = this.price - this.discountPrice

  }

  addOn(item: any) {

    let obj = {
      id: item.id,
      productName: item.productName,
      productId: item.productId,
      quantity: item.quantity + 1,
      price: item.price,
      discount: item.discount,
      createdAt: new Date(),
      userId: this.user?.id,
      image: item?.image,
      rating: item?.rating,
      createdBy: this.user?.email
    }
    this._service.updateCart(obj, item?.id).subscribe((res: any) => {
      console.log(res)
      this._service.getCartByUserId(this.user?.id).subscribe((res: any) => {
        console.log(res)
        this.data = res
        this.getCartValue()
      })
    })


  }
  plcaceOrder() {

  
  
      this.data.forEach(ele => {
        let obj = {
          "productName": ele?.productName,
          "productId": JSON.stringify(ele?.id),
          "quantity": ele?.quantity,
          "totalPrice": ele?.price,
          "image": ele?.image,
          "rating": ele?.rating,
          "amountSaved": JSON.stringify(ele?.price - (ele?.discount / 100 * ele?.price)),
          "transactionId": JSON.stringify(Math.floor((Math.random()*60000000)+1)),
          "createdAt": new Date(),
          "userId": this.user.id,
          "createdBy": JSON.stringify(this.c_a),
          "addressId": this.ad
        }
        this._service.addOrder(obj).subscribe((res: any) => {
          console.log(res)
          this._service.deleteCart(ele?.id).subscribe((res: any) => {
            console.log(res)
          })
        })
      })
      
    this.pay(this.totalPrice)
   
   
    
  //  location.reload()





  }
  subOn(item: any) {
    if (item.quantity > 1) {
      let obj = {
        id: item.id,
        productName: item.productName,
        productId: item.productId,
        quantity: item.quantity - 1,
        price: item.price,
        discount: item.discount,
        createdAt: new Date(),
        userId: this.user?.id,
        image: item?.image,
        rating: item?.rating,
        createdBy: this.user?.email
      }
      this._service.updateCart(obj, item?.id).subscribe((res: any) => {
        console.log(res)
        this._service.getCartByUserId(this.user?.id).subscribe((res: any) => {
          console.log(res)
          this.data = res
          this.getCartValue()
        })
      })
    }
    else {
      this._service.deleteCart(item?.id).subscribe((res: any) => {
        console.log(res)
        this._service.getCartByUserId(this.user?.id).subscribe((res: any) => {
          console.log(res)
          this.data = res
          this.getCartValue()
        })
        this._toastr.error("Product Removed")
      })
    }

  }
  handler: any
  pay(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Mn18bSF5Bhh2uVr1gsTXJdTW45wWRy4BumyTiVde8cF436gQbKIUBzf1iGECnBDARZXdWqNMGCwRslSlKhYaKEk00mRdyK20b',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        alert("Payment Succes!! Order Placed")
        // this._toastr.err
        console.log(token)
        // return token;

      }
    });

    handler.open({
      name: 'ShipKart',
      description: 'Your one stop Shopping solution',
      amount: amount * 100
    });

  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Mn18bSF5Bhh2uVr1gsTXJdTW45wWRy4BumyTiVde8cF436gQbKIUBzf1iGECnBDARZXdWqNMGCwRslSlKhYaKEk00mRdyK20b',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }


}
