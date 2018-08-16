import {Injector, NgModule} from '@angular/core';

import {ConfirmationService} from 'primeng/api';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [ConfirmationService],
})

export class ToolkitModule {
  public static injector: Injector;

  constructor(injector: Injector) {
    ToolkitModule.injector = injector;
  }
}
