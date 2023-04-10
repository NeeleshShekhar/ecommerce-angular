import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-banner-two',
  templateUrl: './banner-two.component.html',
  styleUrls: ['./banner-two.component.scss']
})
export class BannerTwoComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  constructor(private _service:AdminService){

  }
  ngOnInit(){
this.getBanner()
  }
data:any[]=[]
  getBanner(){
    this._service.getBanners().subscribe((res:any)=>{
      console.log(res)
      this.data=res
      console.log(res)
      // this.data.splice(4,8)
    })
  }
}
