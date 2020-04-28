import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable, of, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Likes, User, Listing } from '../user.model';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})


export class UserProfileComponent implements OnInit {
  public UserId = '';
  public BookId = '';
  public DisplayName = '';
  public emailAddress = '';
  public uid = '';
  Likes: Likes[];
  likedBooks: Listing[];
  ownListings: Listing[];
  likeItems: Observable<any>;
  listingItems: Observable<any>;

  constructor(firestore: AngularFirestore, storage: AngularFireStorage, public auth: AuthService) {
    this.Likes = [];
    this.likedBooks = [];
    this.likeItems = firestore.collection('likes').valueChanges();
    this.listingItems = firestore.collection(environment.dbCollection).valueChanges();
    auth.user$.subscribe((user: User) => {
      this.UserId = user.uid;
      this.DisplayName = user.displayName;
      this.emailAddress = user.email;
      this.uid = user.uid;
      this.likeItems.subscribe(items => {
        this.Likes = items;
        this.Likes = this.Likes.filter(item => {
          return item.UserId === this.UserId;
        });

        this.Likes.forEach(item => {
          firestore.collection(environment.dbCollection).doc(item.BookId).ref.get().then(doc => {
            if (doc.exists) {
              console.log("The title of the book with bookId of " + item.BookId + " is " + doc.data().BookName);
              this.likedBooks.push({
                BookId: item.BookId,
                BookName: doc.data().BookName,
                Condition: doc.data().Condition,
                UserId: doc.data().UserId,
                PhotoUrl: doc.data().PhotoUrl,
                Price: doc.data().Price,
                Type: doc.data().Type
              })
            } else {
              console.log("Cannot find the listing with bookId of " + item.BookId);
            }
          }).catch(error => {
            console.log("There was an error getting the document:", error);
          });
        });
      });
      this.listingItems.subscribe(listingItems => {
        this.ownListings = listingItems;
        this.ownListings = this.ownListings.filter(item => item.UserId === this.UserId);
      })
    });
  }

  ngOnInit(): void {
  }

}
