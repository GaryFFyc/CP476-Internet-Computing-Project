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

  constructor() { }

}

