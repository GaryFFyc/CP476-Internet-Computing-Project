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
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
import { ListingDetailDialogComponent } from './listing-detail-dialog/listing-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpDialogComponent,
    HomeComponent,
    LoginComponent,
    NewListingComponent,
    UserProfileComponent,
    SearchComponent,
    ListingDetailDialogComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    MdcDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
