import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileUploderComponent } from './components';
import { FileUploaderService } from './services';

@NgModule({
  imports: [CommonModule, FormsModule],
  providers: [
    FileUploaderService,
  ],
  declarations: [
    FileUploderComponent,
  ],
  exports: [
    FileUploderComponent,
  ]
})
export class FileUploaderModule {
}
