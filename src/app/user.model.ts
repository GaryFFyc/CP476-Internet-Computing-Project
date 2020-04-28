export interface User {
  uid: string;
  email: string;
  displayName?: string;
  myCustomData?: string;
  photoURL: string;
}

export interface Listing {
  BookId: string;
  BookName: string;
  Condition: number;
  PhotoUrl: string;
  Price: number;
  Type: number;
  UserId: string;
}

export interface Likes {
  BookId: string;
  UserId: string;
  photoURL: string;
}
