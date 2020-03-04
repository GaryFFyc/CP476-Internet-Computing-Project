import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MdcDialogModule } from '@angular-mdc/web';
import { SignUpDialogComponent } from './signup-dialog/signup-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewListingComponent } from './new-listing/new-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpDialogComponent,
    HomeComponent,
    LoginComponent,
    NewListingComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    MdcDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
