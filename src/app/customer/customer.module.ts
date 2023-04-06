import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from '../admin/categories/categories.component';
import { OfferComponent } from '../admin/offer/offer.component';
import { ProductsComponent } from '../admin/products/products.component';
import { BannerComponent } from './banner/banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    LandingComponent,
    BannerComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(
      [
        {path:'',component:LandingComponent}
     

      ],
      
    ),
  ]
})
export class CustomerModule { }
