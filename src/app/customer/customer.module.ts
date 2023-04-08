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
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import {NgxPaginationModule} from 'ngx-pagination'
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatRadioModule } from '@angular/material/radio';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    LandingComponent,
    BannerComponent,
    CategoryComponent,
    ProductComponent,
    ProductByCategoryComponent,
    CartComponent,
    WishlistComponent,
    ProfileComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    NgxPaginationModule,
    NgxSliderModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forChild(
      [
        {path:'',component:LandingComponent},
        {
          path:'product-by-category/:id',component:ProductByCategoryComponent
        },
        {
          path:'cart',
          component:CartComponent
        },
        
        {
          path:'wishlist',
          component:WishlistComponent
        }
     

      ],
      
    ),
  ]
})
export class CustomerModule { }
