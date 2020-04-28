import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Listing } from './../user.model'; // optional
import { environment } from 'src/environments/environment';
import { MdcDialog, MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';
import { ListingDetailDialogComponent } from '../listing-detail-dialog/listing-detail-dialog.component';
import { SignUpDialogComponent } from '../signup-dialog/signup-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  masonryImages: Listing[];

  items: Observable<any>;
  constructor(firestore: AngularFirestore,
              storage: AngularFireStorage,
              public dialog: MdcDialog) {

    this.items = firestore.collection(environment.dbCollection).valueChanges();
    this.items.subscribe(items => {
      this.masonryImages = items;
      this.masonryImages.forEach(item => {
          const ref = storage.ref('Photos/' + item.PhotoUrl);
          ref.getDownloadURL().subscribe(response => {
            item.PhotoUrl = response;
          });
        });
    });
  }
  ngOnInit(): void { }

  openDetails(bookId: string): void {
    const dialogRef = this.dialog.open(ListingDetailDialogComponent, {
      data: {id: bookId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
