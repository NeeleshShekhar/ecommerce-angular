import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-add-update-categories',
  templateUrl: './add-update-categories.component.html',
  styleUrls: ['./add-update-categories.component.scss']
})
export class AddUpdateCategoriesComponent {


  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];
  catForm = new FormGroup({
    name: new FormControl('', Validators.required),
    imgUrl: new FormControl('', Validators.required)
  });
  constructor(
    private _fb: FormBuilder,
    private _service: AdminService,
    private _toast: ToastrService,
    private _snack:SnackbarService,
    private _dialogRef: MatDialogRef<AddUpdateCategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.catForm.patchValue({
      name:this.data?.name,
      imgUrl:this.data?.imageURL
    });
  }

  onFormSubmit() {
    if (this.catForm.valid) {
    
      if(!this.data)
      {
        let obj = {
          "name": this.catForm.value.name,
          "imageURL": this.catForm.value.imgUrl,
          "createdAT": new Date(),
          "modifiedAt": new Date(),
          "createdBY": "admin",
          "modifiedBY": "admin",
          "isActive": true
        }
        this._service.postCategory(obj).subscribe((res: any) => {
          console.log(res)
          this._snack.openSnackBar("Category Added!",'done')
          this._dialogRef.close(true);
        })
      }
      else{
        let obj = {
          "id":this.data.id,
          "name": this.catForm.value.name,
          "imageURL": this.catForm.value.imgUrl,
          "createdAT": this.data.createdAT,
          "modifiedAt": new Date(),
          "createdBY": "admin",
          "modifiedBY": "admin",
          "isActive": true
        }
        this._service.updateCategory(this.data.id,obj).subscribe((res: any) => {
          console.log(res)
          this._snack.openSnackBar("Category Updated!",'done')
          this._dialogRef.close(true);
        })
      }
     
    }

  }

  // onFormSubmit() {
  //   if (this.empForm.valid) {
  //     if (this.data) {
  //       this._empService
  //         .updateEmployee(this.data.id, this.empForm.value)
  //         .subscribe({
  //           next: (val: any) => {
  //             this._coreService.openSnackBar('Employee detail updated!');
  //             this._dialogRef.close(true);
  //           },
  //           error: (err: any) => {
  //             console.error(err);
  //           },
  //         });
  //     } else {
  //       this._empService.addEmployee(this.empForm.value).subscribe({
  //         next: (val: any) => {
  //           this._coreService.openSnackBar('Employee added successfully');
  //           this._dialogRef.close(true);
  //         },
  //         error: (err: any) => {
  //           console.error(err);
  //         },
  //       });
  //     }
  //   }
  // }
}
