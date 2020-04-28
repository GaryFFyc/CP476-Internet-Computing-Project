import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Listing } from './../user.model'; // optional
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  masonryImages: Listing[];

  items: Observable<any>;
  constructor(firestore: AngularFirestore,
              storage: AngularFireStorage) {

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



    // this.items.subscribe(items => {
    //   console.log('length of items: '+ items.length);
    //   for (var i = 0; i < items.length; i++) {
    //     console.log('i = ' + i)
    //     const ref = storage.ref('Photos/' + items[i].PhotoUrl);
    //     ref.getDownloadURL().subscribe(response => {
    //       console.log("Get image download url: " + response);
    //       items[i].PhotoUrl = response;
    //       console.log("Get image download url: " + items[i].PhotoUrl);

    //       this.masonryImages = items;
    //       console.log('len of masonryImages: ' + this.masonryImages.length)
    //     })
    //     console.log("First masonryImages photoURL: " + this.masonryImages[0].PhotoUrl)
    //   }
    // })
    // for (let i = 0; i < 40; i++) {
    //   this.masonryImages.push({ name: 'sample', image: '../../assets/Google.svg' });
    // }
    // this.masonryImages.push({
    //   BookName: 'MA121',
    //   PhotoUrl: '../../assets/holtMath.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'CP476',
    //   PhotoUrl: '../../assets/internet-computing.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'AS101',
    //   PhotoUrl: '../../assets/theShapeOfSpace.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'PC299',
    //   PhotoUrl: '../../assets/physics.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'EC999',
    //   PhotoUrl: '../../assets/economics.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'CO000',
    //   PhotoUrl: '../../assets/collegeAccounting.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'CP898',
    //   PhotoUrl: '../../assets/Algorithems.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'CP476',
    //   PhotoUrl: '../../assets/internet-computing.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'AS101',
    //   PhotoUrl: '../../assets/theShapeOfSpace.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'PC299',
    //   PhotoUrl: '../../assets/physics.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'EC999',
    //   PhotoUrl: '../../assets/economics.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'CO000',
    //   PhotoUrl: '../../assets/collegeAccounting.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'CP898',
    //   PhotoUrl: '../../assets/Algorithems.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'CP476',
    //   PhotoUrl: '../../assets/internet-computing.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'AS101',
    //   PhotoUrl: '../../assets/theShapeOfSpace.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'PC299',
    //   PhotoUrl: '../../assets/physics.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'EC999',
    //   PhotoUrl: '../../assets/economics.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'CO000',
    //   PhotoUrl: '../../assets/collegeAccounting.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
    // this.masonryImages.push({
    //   BookName: 'CP898',
    //   PhotoUrl: '../../assets/Algorithems.jpg',
    //   Condition: 0.6,
    //   BookId: 'null',
    //   Price: 50.36,
    //   Type: 1,
    //   UserId: 'JJONyUyQbFPyBczuGP2ElbfMf5F2'
    // });
  }
  ngOnInit(): void { }
}
