import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[SidenavComponent,HeaderComponent,FooterComponent]
})
export class SharedModule { }
