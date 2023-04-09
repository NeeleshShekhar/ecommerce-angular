import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
showReg:boolean=false
offerForm = new FormGroup({
  email: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
  // amount: new FormControl('',Validators.required)
});
constructor(private _dialogRef: MatDialogRef<SignInComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,private _service:AdminService){
  
}

onFormSubmit(){
  if(this.offerForm.valid){
    this._service.loginAdmin(this.offerForm.value).subscribe((res:any)=>{
      console.log(res)
      localStorage.setItem('userObj',JSON.stringify(res))
      this._dialogRef.close(true);
    })
  }
}
}
