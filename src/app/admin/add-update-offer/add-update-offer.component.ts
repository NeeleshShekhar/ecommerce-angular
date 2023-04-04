import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddUpdateCategoriesComponent } from '../add-update-categories/add-update-categories.component';
import { SnackbarService } from 'src/app/snackbar.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-update-offer',
  templateUrl: './add-update-offer.component.html',
  styleUrls: ['./add-update-offer.component.scss']
})
export class AddUpdateOfferComponent {
  offerForm = new FormGroup({
    name: new FormControl('',Validators.required),
    desc: new FormControl('',Validators.required),
    amount: new FormControl('',Validators.required)
  });
  constructor(
    private _fb: FormBuilder,private _service: AdminService,
    private _snack:SnackbarService,
    private _dialogRef: MatDialogRef<AddUpdateOfferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.offerForm.patchValue({
      name:this.data.name,
      desc:this.data.description,
      amount:this.data.amount
    });
  }

  onFormSubmit() {
    if (this.offerForm.valid) {
    
      if(!this.data)
      {
        let obj = {
          "description": this.offerForm.value.desc,
          "name": this.offerForm.value.name,
          "amount": this.offerForm.value.amount,
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "createdBy": 1,
          "updatedBy": 1,
          "isActive": true
        }
        this._service.addOffers(obj).subscribe((res: any) => {
          console.log(res)
          this._snack.openSnackBar("Offer Added!",'done')
          this._dialogRef.close(true);
        })
      }
      else{
        let obj = {
          "id": this.data.id,
          "description": this.offerForm.value.desc,
          "name": this.offerForm.value.name,
          "amount": this.offerForm.value.amount,
          "createdAt": this.data.createdAt,
          "updatedAt": new Date(),
          "createdBy": 1,
          "updatedBy": 1,
          "isActive": true
        }
        this._service.updateOffer(this.data.id,obj).subscribe((res: any) => {
          console.log(res)
          this._snack.openSnackBar("Offer Updated!",'done')
          this._dialogRef.close(true);
        })
      }
     
    }
  }
}
