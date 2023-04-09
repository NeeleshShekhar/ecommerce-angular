import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from '../app-routing.module';
// import { FooterComponent } from '../footer/footer.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
   

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    
  ],
  exports:[SidenavComponent,HeaderComponent]
})
export class SharedModule { }
