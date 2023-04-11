import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent {
  data:any[]=[]
  user:any
  constructor(private _service:AdminService,private router:Router,private _toaste:ToastrService){
  
  }
  
  ngOnInit(){
    let currentDate=new Date()
    let dateSent=new Date()
    console.log(Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24)))
    this.user = JSON.parse(localStorage.getItem('userObj')!)
    this._service.getPOrderByUserId(this.user?.id).subscribe((res:any)=>{
      this.data=res
      this.data.forEach((element=>{
        let currentDate=new Date()
        let dateSent=new Date(element?.createdAt)
        if(Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24))>=2)
        element["status"]="Delivered"
        else
        element["status"]="Not Delivered"
      }))
      console.log(this.data)
    })
  }
}
