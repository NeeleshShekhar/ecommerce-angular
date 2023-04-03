import { Component, Input } from '@angular/core';
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
  onToggleSideNav(data:SideNavToggle):void{
this.screenWidth=data.screenWidth
this.isSideNavClosed=data.collapsed
  }
}
