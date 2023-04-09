import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddUpdateOfferComponent } from 'src/app/admin/add-update-offer/add-update-offer.component';
import { AdminService } from 'src/app/admin/admin.service';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-addupdate-address',
  templateUrl: './addupdate-address.component.html',
  styleUrls: ['./addupdate-address.component.scss']
})
export class AddupdateAddressComponent {
  offerForm = new FormGroup({
    city: new FormControl('', Validators.required),
    pinCode: new FormControl('', Validators.required),
    landmark: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required)
  });
  constructor(
    private _fb: FormBuilder, private _service: AdminService,
    private _snack: SnackbarService,
    private _dialogRef: MatDialogRef<AddUpdateOfferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.offerForm.patchValue({
      city:this.data.city,
      landmark:this.data.landmark,
      pinCode:this.data.pinCode,
      state:this.data.state,
      country:this.data.country
    });
  }

  onFormSubmit() {
    if (localStorage.getItem('userObj') != null) {
      if (this.offerForm.valid) {

        if (!this.data) {
         let obj:any=this.offerForm.value
         obj["userId"]=JSON.parse(localStorage.getItem('userObj')!).id
          this._service.addAddress(obj).subscribe((res: any) => {
            console.log(res)
            this._snack.openSnackBar("Address Added!", 'done')
            this._dialogRef.close(true);
          })
        }
         else {
          let obj:any=this.offerForm.value
          obj["userId"]=JSON.parse(localStorage.getItem('userObj')!).id
          obj["id"]=this.data.id
           this._service.updateAddress(obj,this.data.id).subscribe((res: any) => {
             console.log(res)
             this._snack.openSnackBar("Address Updated!", 'done')
             this._dialogRef.close(true);
           })
          }

      }
    }

  }
}
