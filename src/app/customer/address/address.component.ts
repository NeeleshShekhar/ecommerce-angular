import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';
import { AddupdateAddressComponent } from '../addupdate-address/addupdate-address.component';
import { AdminService } from 'src/app/admin/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  user: any
  constructor(private router: Router, private _dialog: MatDialog, private _service: AdminService,
    private _toastr:ToastrService) {
    
  }
  data:any[]=[]

  ngOnInit(){
    
    if(localStorage.getItem('userObj')!=null)
    {
      this.user = JSON.parse(localStorage.getItem('userObj')!)
      this.getAddress()
    }
    
  }
  getAddress() {
    
    this._service.getAddressByuserId(this.user?.id).subscribe((res: any) => {
      console.log(res)
      this.data=res
    })
  }
  add() {
    const dialogRef = this._dialog.open(AddupdateAddressComponent);
    dialogRef.afterClosed().subscribe({
      next: (val: any) => {
        if (val) {
          this._toastr.success("Address Added!!")
          // this.getCategory();
          this.getAddress()

        }
      },
    });
  }
  remove(id:any){
    this._service.deletAddress(id).subscribe((res:any)=>{
      console.log(res)
      this._toastr.warning("Address Removed!!")
      this.getAddress()

    })
  }
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddupdateAddressComponent, {
      data,
    });
  
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this._toastr.success("Address Updated!!")
          this.getAddress();
        }
      },
    });
  }
}
