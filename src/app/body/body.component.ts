import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() collapsed = false
  @Input() screenWidth = 0
  showAdminSideNav: boolean = false
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('isAdmin') ==='true') {
      this.showAdminSideNav = true
    }
  }
  getBodyClass(): string {

    let styleClass = ''
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed'
    }
    else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0)
      styleClass = 'body-md-screen'
    return styleClass;
  }

}
