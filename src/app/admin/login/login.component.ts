import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
constructor(private _serivce:AdminService,private router:Router){

}
  onFormSubmit(){
    if(this.loginForm.valid){
      this._serivce.loginAdmin(this.loginForm.value).subscribe((res:any)=>{
        console.log(res)
        localStorage.setItem('isAdmin','true')
        window.location.href='admin/categories'
      })
    }

  }
}
