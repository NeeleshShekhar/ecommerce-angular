import { animate, animation, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navData } from './navData.data';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',
        style({opacity:1}))
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',
        style({opacity:0}))
      ]),

    ])
  ]
})
export class SidenavComponent implements OnInit {
collapsed=false;
navData=navData
@HostListener('window:resize',['$event'])
onResize(event:any){
  this.screenWidth=window.innerHeight
  if(this.screenWidth<=768){
    this.collapsed=false
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})


  }

}
@Output() onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();
screenWidth=0

  constructor() { }

  ngOnInit(): void {
    this.screenWidth=window.innerWidth
  }

  
  toggleSidenav(){
    this.collapsed=!this.collapsed
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }
  closeSideNav(){
    this.collapsed=false
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }
}
