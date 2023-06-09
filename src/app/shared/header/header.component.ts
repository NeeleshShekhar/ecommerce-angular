import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { SignInComponent } from 'src/app/customer/sign-in/sign-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedin:boolean=false
  constructor(private router:Router,private _dialog:MatDialog,private _service:AdminService){
    if (localStorage.getItem('userObj') != null){
      this.isLoggedin=true
      this.getCount()
    }
   
  }
c_count:number|undefined
w_count:number|undefined
  getCount(){
    this._service.getCartByUserId(3).subscribe((res:any)=>{
      if(res.length>0)
      this.c_count=res.length
    })
    this._service.getWishlistByUserId(3).subscribe((res:any)=>{
      if(res.length>0)
      this.w_count=res.length
    })
    
  }
  gotoProfile(){
this.router.navigateByUrl('customer/profile')
  }
  gotoCart(){
    this.router.navigateByUrl('customer/cart')
  }
  openAddEditForm() {
    const dialogRef = this._dialog.open(SignInComponent);
    dialogRef.afterClosed().subscribe({
      next: (val:any) => {
        if (val) {
          // this.getCategory();
          if (localStorage.getItem('userObj') != null)
    this.isLoggedin=true
    this.getCount()
        }
      },
    });
  }
  reload(){
    window.location.href='/'
  }
  gotoWishlist(){
    this.router.navigateByUrl('customer/wishlist')
  }
}
