import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpDialogComponent } from './signup-dialog.component';

describe('SignUpDialogComponent', () => {
  let component: SignUpDialogComponent;
  let fixture: ComponentFixture<SignUpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
