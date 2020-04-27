import { Component, OnInit } from '@angular/core';
import { MdcDialog, MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';
import { Router } from '@angular/router';
import { SignUpDialogComponent } from '../signup-dialog/signup-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: String;
  password: String;
  title = 'BookFetcher';
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });
  constructor(public dialog: MdcDialog,
              private router: Router,
              public auth: AuthService, ) {  }

  ngOnInit(): void {
  }
  openForm() {
    const dialogRef = this.dialog.open(SignUpDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.userName = result.email;
      this.password = result.password;
    });
  }

  onSubmit() {
    console.log('Form Submitted');
    this.router.navigate(['/home']);
  }



}
