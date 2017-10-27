import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { FileUploaderModule } from '../../';
import { FileUploderComponent } from './file-uploader.component';

describe('FileUploderComponent', () => {
  const timeStringFormat = /[0-9]{2}:[0-9]{2}:[0-9]{2}/i;
  let componentFixture: ComponentFixture<FileUploderComponent>;
  let componentInstance: FileUploderComponent;

  // Asynchronous beforeEach.
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FileUploaderModule]
      }).compileComponents().then(() => { /* Don't do anything */ });
    })
  );

  // Synchronous BeforeEach.
  beforeEach(() => {
    componentFixture = TestBed.createComponent(FileUploderComponent);
    componentInstance = componentFixture.componentInstance;
  });

  it('should display time string', (done) => {
    componentFixture.detectChanges();
  });
});
