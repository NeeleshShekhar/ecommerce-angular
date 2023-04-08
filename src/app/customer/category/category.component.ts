import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  data:any[]=[]
constructor(private _service:AdminService,private router:Router){

}
ngOnInit(){
this._service.getCategory().subscribe((res:any)=>{
  console.log(res)
  this.data=res
})
}
gotoListingPage(id:any){
this.router.navigate(['customer/product-by-category',id])
}
}
