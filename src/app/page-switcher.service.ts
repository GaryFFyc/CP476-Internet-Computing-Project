import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageSwitcherService {
  public router: Router;

  public destinations = [
    { label: 'Home', icon: 'inbox', activated: true, link: '/home' },
    { label: 'Search', icon: 'search', activated: false, link: '/search' },
    { label: 'New Listing', icon: 'assignment', activated: false, link: '/new-listing' },
    { label: 'My Stuff', icon: 'star', activated: false, link: '/my-listing' },
  ];
  constructor(router: Router) {
    this.router = router;
   }

  public switchPage(route: string) {
    this.destinations.forEach(destination => {
      if (destination.link == route) {
        this.router.navigate([destination.link]);
        destination.activated = true;
      } else {
        destination.activated = false;
      }
    })
  }
}
