import { Component, OnInit } from '@angular/core';
import {MdcSliderChange} from '@angular-mdc/web';



@Component({
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.scss']
})
export class NewListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChange(event: { index: any, value: any }): void {
    console.log("currentSelection: "+ event.index)
  }

  onInput(event: MdcSliderChange): void {
    console.log(event.value);
  }

  onChange(event: MdcSliderChange): void {
    console.log(event.value);
  }
}
