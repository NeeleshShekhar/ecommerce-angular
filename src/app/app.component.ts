import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSideNavClosed=false
  screenWidth=0
  showNav:boolean=true
  constructor(private router:Router){
 
  }
  // ngOnInit(){
  //   if(this.router.url==='admin')
  //   console.log(this.router.url)
  //    this.showNav=false
  // }
  onToggleSideNav(data:SideNavToggle):void{
this.screenWidth=data.screenWidth
this.isSideNavClosed=data.collapsed
  }
}
