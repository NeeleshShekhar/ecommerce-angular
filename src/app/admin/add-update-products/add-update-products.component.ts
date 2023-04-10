import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/snackbar.service';
import { AddUpdateCategoriesComponent } from '../add-update-categories/add-update-categories.component';

@Component({
  selector: 'app-add-update-products',
  templateUrl: './add-update-products.component.html',
  styleUrls: ['./add-update-products.component.scss']
})
export class AddUpdateProductsComponent {
  productForm = new FormGroup({
    name: new FormControl('',Validators.required),
    desc: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
    banner: new FormControl(''),
    review: new FormControl(''),
    rating: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    cats: new FormControl('',Validators.required),
    discount: new FormControl('',Validators.required),
    kf1: new FormControl('',Validators.required),
    kf2: new FormControl('',Validators.required),
    kf3: new FormControl('',Validators.required),
    kf4: new FormControl('',Validators.required)

  });
  cats: any[] = []
  constructor(private _service: AdminService,
    private _snack:SnackbarService,
    private _dialogRef: MatDialogRef<AddUpdateCategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.getCategory()
  }
  ngOnInit(): void {
    this.productForm.patchValue({
      name:this.data.name,
      desc:this.data.description,
      image:this.data.imageURL,
      quantity:this.data.quantity,
      price:this.data.price,
      discount:this.data.discountPercent,
      cats:this.data.categoryId,
      kf1:this.data.keyfeature1,
      kf2:this.data.keyfeature2,
      kf3:this.data.keyfeature3,
      kf4:this.data.keyfeature4,
      rating:this.data.rating


      
    });
  }

  getCategory() {
    this._service.getCategory().subscribe((res: any) => {
      console.log(res)
      this.cats = res
    })
  }
  onFormSubmit() {
    if (this.productForm.valid) {
    
      if(!this.data)
      {
        let obj = {
          "name":this.productForm.value.name,
          "description": this.productForm.value.desc,
          "imageURL": this.productForm.value.image,
          "bannerID": 0,
          "isActive": true,
          "categoryId": Number(this.productForm.value.cats),
          "price": this.productForm.value.price,
          "keyfeature1":this.productForm.value.kf1,
          "keyfeature2":this.productForm.value.kf2,
          "keyfeature3":this.productForm.value.kf3,
          "keyfeature4":this.productForm.value.kf4,
          "rating": this.productForm.value.rating,
          "reviewID": 0,
          "offerID": 0,
          "discountPercent": this.productForm.value.discount,
          "quantity": this.productForm.value.quantity,
          "createdAt": new Date(),
          "modifiedAt": new Date(),
          "createdBy": "admin",
          "modifiedBy": "admin"
        }
        this._service.addProduct(obj).subscribe((res: any) => {
          console.log(res)
          this._snack.openSnackBar("Product Added!",'done')
          this._dialogRef.close(true);
        })
      }
      else{
        let obj = {
          "id":this.data.id,
          "name":this.productForm.value.name,
          "description": this.productForm.value.desc,
          "imageURL": this.productForm.value.image,
          "bannerID": 0,
          "isActive": true,
          "categoryId": Number(this.productForm.value.cats),
          "price": this.productForm.value.price,
          "keyfeature1":this.productForm.value.kf1,
          "keyfeature2":this.productForm.value.kf2,
          "keyfeature3":this.productForm.value.kf3,
          "keyfeature4":this.productForm.value.kf4,
          "rating": this.productForm.value.rating,
          "reviewID": 0,
          "offerID": 0,
          "discountPercent": this.productForm.value.discount,
          "quantity": this.productForm.value.quantity,
          "createdAt": this.data.createdAt,
          "modifiedAt": new Date(),
          "createdBy": "admin",
          "modifiedBy": "admin"
        }
        this._service.updateProduct(this.data.id,obj).subscribe((res: any) => {
          console.log(res)
          this._snack.openSnackBar("Product Updated!",'done')
          this._dialogRef.close(true);
        })
      }
     
    }
  }
}
