import { Component, OnInit, ViewChild } from '@angular/core';
import { MdcDialog, MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';
import { Router } from '@angular/router';
import { SignUpDialogComponent } from './signup-dialog/signup-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { PageSwitcherService } from './page-switcher.service';
import {MdcDrawer} from '@angular-mdc/web/drawer';


const SMALL_WIDTH_BREAKPOINT = 1200;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public username = 'Developer';
  items: Observable<any[]>;
  public showSidenav = true;
  matcher: MediaQueryList;


  @ViewChild('appDrawer', {static: false}) appDrawer: MdcDrawer;
  constructor(authService: AuthService,
              public pages: PageSwitcherService) {
    authService.user$.subscribe(user => {
      if (user) {
        this.username = user.displayName;
      } else {
        this.username = 'guest';
      }
    });
  }
  ngOnInit(): void {
    this.matcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
    this.appDrawer.open = !this.isScreenSmall();
  }
  isScreenSmall(): boolean {
    return this.matcher.matches;
  }


}

