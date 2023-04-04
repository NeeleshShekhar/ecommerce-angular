import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategriesComponent } from './categries/categries.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddUpdateCategoriesComponent } from './add-update-categories/add-update-categories.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OfferComponent } from './offer/offer.component';
import { AddUpdateOfferComponent } from './add-update-offer/add-update-offer.component';
import { ProductsComponent } from './products/products.component';
import { AddUpdateProductsComponent } from './add-update-products/add-update-products.component';
import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    CategriesComponent,
    CategoriesComponent,
    AddUpdateCategoriesComponent,
    OfferComponent,
    AddUpdateOfferComponent,
    ProductsComponent,
    AddUpdateProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'categories',component:CategoriesComponent},
     
        {path:'offers',component:OfferComponent},
       
        {path:'products',component:ProductsComponent},
     

      ],
      
    ),
    MatToolbarModule,
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
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    FilterPipeModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  exports:[CategoriesComponent]
})
export class AdminModule { }
