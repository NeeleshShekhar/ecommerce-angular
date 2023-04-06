import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  data:any[]=[]
constructor(private _service:AdminService){

}
ngOnInit(){
  this._service.getProducts().subscribe((res:any)=>{
    console.log(res)
    this.data=res
  })
}
}
