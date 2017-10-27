import {
  Component, OnInit, Input, forwardRef,
  OnChanges, Output, EventEmitter
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FileUploaderService } from '../../services';
const noop = () => {
};

@Component({
  selector: 'file-uploader',
  styleUrls: ['./file-uploader.component.scss'],
  templateUrl: './file-uploader.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploderComponent), multi: true
    }
  ]
})
export class FileUploderComponent implements ControlValueAccessor {
  @Input() public source: any;
  @Output() public fileChanged: EventEmitter<any> = new EventEmitter();
  @Output() public onClear: EventEmitter<any> = new EventEmitter();
  public _imagePath: string;
  public uploading = false;
  // The internal data model
  private innerValue: any = '';

  // Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  // get accessor
  get value(): any {
    return this.innerValue;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }
  // Current time string.

  public writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  // From ControlValueAccessor interface
  public registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  public onBlur() {
    this.onTouchedCallback();
  }

  public onChange(event: any) {
    const files = event.srcElement.files;
    this.uploading = true;
    const fileToLoad = files[0];

    const fileReader = new FileReader();

    fileReader.onload = (fileLoadedEvent) => {
      const data = fileReader.result;
      const fileType = data.substring('data:image/'.length, data.indexOf(';base64'));
      const payload = {
        data,
        extension: fileType
      };
      this.fileChanged.emit(payload);
    };

    fileReader.readAsDataURL(fileToLoad);
  }

  public clear() {
    this.value = null;
    this.onClear.emit();
  }
}
