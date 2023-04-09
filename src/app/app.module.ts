import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BodyComponent } from './body/body.component';
import { AdminModule } from './admin/admin.module';
import { MatToolbarModule } from '@angular/material/toolbar';

// import { FooterNewComponent } from './footer-new/footer-new.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    BrowserAnimationsModule,
    MatToolbarModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
