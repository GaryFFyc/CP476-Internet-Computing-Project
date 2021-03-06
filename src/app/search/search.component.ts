import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Listing } from '../user.model';
import { environment } from 'src/environments/environment';
import { MdcDialog } from '@angular-mdc/web/dialog';
import { ListingDetailDialogComponent } from '../listing-detail-dialog/listing-detail-dialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchTerm: string = '';
  public showSearchResults = false;
  masonryImages: Listing[];
  unfiltered: Listing[];
  items: Observable<any>;

  constructor(firestore: AngularFirestore,
    storage: AngularFireStorage,public dialog: MdcDialog) {
    this.masonryImages = [];
    this.items = firestore.collection(environment.dbCollection).valueChanges();
    this.items.subscribe(items => {
      this.masonryImages = items;
      this.unfiltered = items
      if (this.showSearchResults) {
        this.masonryImages = this.masonryImages.filter(item => {
          console.log(item.BookName + " mathches the search term: " + item.BookName.includes(this.searchTerm));
          return item.BookName.toUpperCase().includes(this.searchTerm.toUpperCase())
        });
      }
      this.masonryImages.forEach(item => {
        const ref = storage.ref('Photos/' + item.PhotoUrl);
        ref.getDownloadURL().subscribe(response => {
          item.PhotoUrl = response;
        });
      });
    });
  }

  ngOnInit(): void {

  }

  searchTermChanged(value: string) {
    this.showSearchResults = value != '';
    this.searchTerm = value;
    if (this.showSearchResults) {
      this.masonryImages = this.unfiltered;
      if (this.showSearchResults) {
        this.masonryImages = this.masonryImages.filter(item => {
          console.log(item.BookName + ' mathches the search term "' + value + '" : ' + item.BookName.toUpperCase().includes(value.toUpperCase()));
          return item.BookName.includes(value)
        });
      }
    }
  }

  openDetails(bookId: string): void {
    const dialogRef = this.dialog.open(ListingDetailDialogComponent, {
      data: {id: bookId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  search() {
    this.searchTerm = 'you entered: ' + this.searchTerm;
  }

}
