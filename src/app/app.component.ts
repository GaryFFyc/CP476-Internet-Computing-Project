import { Component } from '@angular/core';
import { MdcDialog, MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';
import { Router } from '@angular/router';
import { SignUpDialogComponent } from './signup-dialog/signup-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = "Developer"

  destinations = [
    { label: 'Home (Products)', icon: 'inbox', activated: true },
    { label: 'My Profile (Saved and own listings)', icon: 'star', activated: false },
    { label: 'Search', icon: 'search', activated: false },
    { label: 'New Listing', icon: 'assignment', activated: false }
  ];
  constructor() { }

}

