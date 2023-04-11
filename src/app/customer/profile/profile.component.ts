import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: any
  constructor(private router:Router) {
    this.user = JSON.parse(localStorage.getItem('userObj')!)
    console.log(this.user)
  }
  logout(){
    localStorage.clear()
    window.location.href='customer'
  }
  profile(){
    this.router.navigateByUrl('customer/profile') 
  }
  gotoOrder(){
    this.router.navigateByUrl('customer/my-order') 
  }
  address(){
    this.router.navigateByUrl('customer/address') 
  }
}
