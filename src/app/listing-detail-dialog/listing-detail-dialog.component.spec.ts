import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailDialogComponent } from './listing-detail-dialog.component';

describe('ListingDetailDialogComponent', () => {
  let component: ListingDetailDialogComponent;
  let fixture: ComponentFixture<ListingDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
