import { Component } from '@angular/core';
import { MdcDialog, MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';
import { Router } from '@angular/router';
import { SignUpDialogComponent } from './signup-dialog/signup-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public username = "Developer"

  destinations = [
    { label: 'Home (Products)', icon: 'inbox', activated: true, link: '/home' },
    { label: 'My Profile (Saved and own listings)', icon: 'star', activated: false, link: '/my-listing' },
    { label: 'Search', icon: 'search', activated: false, link: '/home' },
    { label: 'New Listing', icon: 'assignment', activated: false, link: '/new-listing' }
  ];
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore,
    authService: AuthService) {
    this.items = firestore.collection('listing').valueChanges();
    this.items.subscribe(items => {
      console.log(items[0].BookName);
    })
    authService.user$.subscribe(user => {
      if (user) {
        this.username = user.displayName;
      } else {
        this.username = 'guest';

      }
    })
  }

}

