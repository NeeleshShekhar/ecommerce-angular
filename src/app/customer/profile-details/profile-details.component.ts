import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent {
constructor(private _serivce:AdminService,private _toastr:ToastrService){

}
user:any
form=new FormGroup({
  fname:new FormControl(),
  lname:new FormControl(),
  phone:new FormControl(),
  email:new FormControl(),

})
ngOnInit(){
  this.user=JSON.parse(localStorage.getItem('userObj')!)
  this.form.patchValue({
    fname:this.user?.firstName,
    lname:this.user?.lastName,
    phone:this.user?.phone,
    email:this.user?.email,
  })
}
isRead:boolean=true
read(){
this.isRead=false
}
update(){
let obj={
  "id": 3,
    "phone": this.form.value.phone,
    "password": "user",
    "firstName":this.form.value.fname,
    "lastName": this.form.value.lname,
    "email": this.form.value.email,
    "userRole": "user",
    "createdAt": "string",
    "modifiedAt": "string",
    "isActive": true,
  "address": [
    {
      "id": 0,
      "city": "string",
      "state": "string",
      "country": "string",
      "pinCode": 0,
      "landmark": "string",
      "userId": 0,
      "createdAt": "2023-04-12T12:05:33.176Z",
      "modifiedAt": "2023-04-12T12:05:33.176Z",
      "isActive": true
    }
  ]
}
this._serivce.updateUser(obj,3).subscribe((res:any)=>{
  console.log(res)
this._toastr.success("Profile Updated")
  this.isRead=!this.isRead
  this._serivce.getUserById(3).subscribe((res:any)=>{
    console.log(res)
    localStorage.setItem('userObj',JSON.stringify(res))
    this.user=JSON.parse(localStorage.getItem('userObj')!)
    this.form.patchValue({
      fname:this.user?.firstName,
      lname:this.user?.lastName,
      phone:this.user?.phone,
      email:this.user?.email,
    })
  })
})
}
}
