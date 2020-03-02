import { Component } from '@angular/core';
import { MdcDialog, MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookFetcher';
  constructor(public dialog: MdcDialog) { }

  openForm() {
    // const dialogRef = this.dialog.open(DialogForm);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }
}
