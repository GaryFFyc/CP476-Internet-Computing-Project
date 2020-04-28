import { Component, OnInit } from '@angular/core';
import { MdcSliderChange } from '@angular-mdc/web';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Listing } from '../user.model';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';



@Component({
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.scss']
})
export class NewListingComponent implements OnInit {
  uploading = false;
  storage: AngularFireStorage;
  firestore: AngularFirestore;
  router: Router;
  condition = 0.5;
  typeString = 'Not Specified';
  typeInt = 0;
  price = 0;
  bookName = 'Not Specified'
  downloadURL: Observable<string>;
  generatedFileName = '';
  public downloadUrlStr: string;
  postBtnText = 'Post';
  docId = '';
  picUploaded = false;
  userId = '';
  constructor(storage: AngularFireStorage,
              firestore: AngularFirestore,
              authService: AuthService,
              router: Router) {
    this.docId = firestore.createId();
    this.storage = storage;
    this.router = router;
    this.firestore = firestore;
    authService.user$.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      } else {
        this.userId = 'null';
      }
    });
  }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    this.generatedFileName = this.randomFileName();
    const file = event.target.files[0];
    const filePath = `Photos/${this.generatedFileName}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.downloadUrlStr = url;
              this.picUploaded = true;
            }
            console.log('In finalize: ' + this.downloadUrlStr);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  randomFileName(): string {
    return Math.random().toString(20).substr(2, 16);
  }

  onBookNameChange(newValue: string) {
    console.log('OnbookNameChange');
    this.bookName = newValue == '' ? 'Not Specified' : newValue;
  }


  onBookPriceChange(newValue: number) {
    console.log('OnbookPriceChange');
    this.price = newValue;
  }

  onSelectionChange(event: { index: any, value: any }): void {
    console.log('currentSelection: ' + event.index + ', ' + event.value);
    this.typeInt = event.index;
    this.typeString = event.value;
  }

  onInput(event: MdcSliderChange): void {
    console.log('onInput: ' + event.value);
    this.condition = event.value / 100.0;
  }

  submit(): void {
    this.uploading = true;
    this.postBtnText = 'Posting...';
    console.log('Submitting....');
    const data: Listing = {
      BookId: this.docId,
      BookName: this.bookName,
      Condition: this.condition,
      PhotoUrl: this.generatedFileName,
      Price: this.price,
      Type: this.typeInt,
      UserId: this.userId
    }

    this.firestore
      .collection(environment.dbCollection)
      .doc(this.docId)
      .set(data)
      .then(
        res => {
          console.log("submit completed.")
          this.router.navigate(['/my-listing'])
         },
      );

  }
}
