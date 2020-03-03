import { Component, Inject } from '@angular/core';
import { MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignUpDialogComponent {

  constructor(public dialogRef: MdcDialogRef<SignUpDialogComponent>) { }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPass: new FormControl('', [Validators.minLength(8)])
  }, [
      this.checkPasswords
  ]);


  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPass').value;
    if (pass !== confirmPass) {
      group.get('confirmPass').setErrors({mustMatch: true});
    } else {
      group.get('confirmPass').setErrors(null);
    }
    return pass === confirmPass ? null : { notSame: true }
  }
  submit(): void {
    if (this.profileForm.invalid) {
      return;
    }

    this.dialogRef.close({email: this.profileForm.get('email').value, password:  this.profileForm.get('password').value});
  }
}
