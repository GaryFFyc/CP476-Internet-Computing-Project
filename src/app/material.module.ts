import {NgModule} from '@angular/core';
import {MdcButtonModule} from '@angular-mdc/web';
import {MdcTopAppBarModule} from '@angular-mdc/web';
import {MdcIconModule} from '@angular-mdc/web';
import {MdcTextFieldModule} from '@angular-mdc/web';
import {MdcTypographyModule} from '@angular-mdc/web';
import {MdcIconButtonModule} from '@angular-mdc/web';
import {MdcDialogModule} from '@angular-mdc/web';
import {MdcDrawerModule} from '@angular-mdc/web';
import {MdcListModule} from '@angular-mdc/web';

@NgModule({
  exports: [
      MdcButtonModule,
      MdcTopAppBarModule,
      MdcIconModule,
      MdcTextFieldModule,
      MdcTypographyModule,
      MdcIconButtonModule,
      MdcDialogModule,
      MdcDrawerModule,
      MdcListModule
  ]
})
export class MaterialModule {}
