import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SignInComponent } from './customer/sign-in/sign-in.component';
import { MatDialog } from '@angular/material/dialog';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSideNavClosed=false
  screenWidth=0
  showNav:boolean=true
  showAdminSideNav:boolean=false
  constructor(private router:Router,private _dialog:MatDialog){
    if(localStorage.getItem('isAdmin') =='true'){
      this.showAdminSideNav=true
    }
  }
  // ngOnInit(){
  //   if(this.router.url==='admin')
  //   console.log(this.router.url)
  //    this.showNav=false
  // }
  onToggleSideNav(data:SideNavToggle):void{
this.screenWidth=data.screenWidth
this.isSideNavClosed=data.collapsed
  }
  logout(){
    localStorage.clear()
   window.location.href='admin'
  }
  openAddEditForm() {
    const dialogRef = this._dialog.open(SignInComponent);
    dialogRef.afterClosed().subscribe({
      next: (val:any) => {
        if (val) {
          // this.getCategory();
        }
      },
    });
  }
}
