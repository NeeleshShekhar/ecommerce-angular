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
import { NgxPaginationModule } from 'ngx-pagination'
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatRadioModule } from '@angular/material/radio';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { AddressComponent } from './address/address.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MatChipsModule } from '@angular/material/chips';
import { AddupdateAddressComponent } from './addupdate-address/addupdate-address.component';
import { FooterNewComponent } from './footer-new/footer-new.component';
import { FooterComponent } from './footer/footer.component';
import { FooterNComponent } from './footer-n/footer-n.component';
import { BannerTwoComponent } from './banner-two/banner-two.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { HeaderComponent } from './header/header.component'
import { FilterPipeModule } from 'ngx-filter-pipe'
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
    SignInComponent,
    AddressComponent,
    ProfileDetailsComponent,
    AddupdateAddressComponent,
    FooterNewComponent,
    FooterComponent,
    FooterNComponent,
    BannerTwoComponent,
    FeaturedProductComponent,
    MyOrderComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
    NgxPaginationModule,
    NgxSliderModule,
    MatRadioModule,
    MatListModule,
    FilterPipeModule,
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
    MatChipsModule,
    MatTableModule,
    RouterModule.forChild(
      [
        { path: '', component: LandingComponent },
        {
          path: 'all-products',
          component: ProductByCategoryComponent

        },
        {
          path: 'profile',
          component: ProfileDetailsComponent
        },
        {
          path: 'address',
          component: AddressComponent
        },
        {
          path: 'product-by-category/:id', component: ProductByCategoryComponent
        },
        {
          path: 'cart',
          component: CartComponent
        },

        {
          path: 'wishlist',
          component: WishlistComponent
        },
        {
          path: 'my-order',
          component:MyOrderComponent
        }


      ],

    ),
  ]
})
export class CustomerModule { }
