import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignInComponent } from 'src/app/customer/sign-in/sign-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedin:boolean=false
  constructor(private router:Router,private _dialog:MatDialog){
    if (localStorage.getItem('userObj') != null)
    this.isLoggedin=true
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
        }
      },
    });
  }
}
