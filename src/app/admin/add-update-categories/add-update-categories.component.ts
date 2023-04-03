import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validator } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    name: new FormControl(''),
    imgUrl: new FormControl('')
  });
  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddUpdateCategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    // this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    // if (this.empForm.valid) {
    //   if (this.data) {
    //     this._empService
    //       .updateEmployee(this.data.id, this.empForm.value)
    //       .subscribe({
    //         next: (val: any) => {
    //           this._coreService.openSnackBar('Employee detail updated!');
    //           this._dialogRef.close(true);
    //         },
    //         error: (err: any) => {
    //           console.error(err);
    //         },
    //       });
    //   } else {
    //     this._empService.addEmployee(this.empForm.value).subscribe({
    //       next: (val: any) => {
    //         this._coreService.openSnackBar('Employee added successfully');
    //         this._dialogRef.close(true);
    //       },
    //       error: (err: any) => {
    //         console.error(err);
    //       },
    //     });
    //   }
    // }
  }
}
