import { Component, OnInit, Inject } from '@angular/core';
import { MdcDialogRef, MDC_DIALOG_DATA, } from '@angular-mdc/web/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Listing } from '../user.model';
import { environment } from 'src/environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-listing-detail-dialog',
  templateUrl: './listing-detail-dialog.component.html',
  styleUrls: ['./listing-detail-dialog.component.scss']
})
export class ListingDetailDialogComponent implements OnInit {
  bookId: string;
  PhotoUrl: string;
  bookName: string;
  typeString: string;
  condition: number;
  price: number;

  constructor(public dialogRef: MdcDialogRef<ListingDetailDialogComponent>,
              @Inject(MDC_DIALOG_DATA) public data,
              afs: AngularFirestore,
              storage: AngularFireStorage) {
    this.bookId = data.id;
    console.log("dialog: bookId = " + this.bookId)
    const productsDocuments = afs.doc<Listing>(environment.dbCollection + '/' + this.bookId);
    productsDocuments.valueChanges()
      .subscribe(changes => {
          console.log("Got Book. Name: "+ changes.BookName)
          this.bookName = changes.BookName;
          this.PhotoUrl = changes.PhotoUrl;
          switch (changes.Type) {
            case 1: {
              this.typeString = 'Paper Book';
              break;
            }

            case 2: {
              this.typeString = 'eBook';
              break;
            }

            case 3: {
              this.typeString = 'PDF';
              break;
            }
          }
          this.condition = changes.Condition;
          this.price = changes.Price;
          const ref = storage.ref('Photos/' + this.PhotoUrl);
          ref.getDownloadURL().subscribe(response => {
            this.PhotoUrl = response;
          });
        });


  }

  ngOnInit(): void {
  }
  emailSeller() {
    window.open("mailto:youx8420@mylaurier.ca?subject=About%20your%20listing%20"+ this.bookName + "%20on%20BookFetcher&body=Hi%2C%0D%0A%0D%0AI%20am%20interested%20in%20your%20" + this.bookName + "%20that%20is%20listed%20on%20BookFetcher%2C%20Do%20you%20have%20more%20detail%20of%20it%20to%20share%3F%0D%0A%0D%0ARegards%2C%0D%0A", "_blank");
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
