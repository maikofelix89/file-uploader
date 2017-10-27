import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'my-app',
  template: `Image {{dataModel}} <file-uploader
  [(ngModel)]="dataModel" (onClear)="clear()" (fileChanged)="upload($event)">
  </file-uploader>`
})
export class AppComponent {
  public header: string = 'UMD Demo';
  public dataModel: string;
  public upload(file: any) {
    console.log('file', file);
    this.dataModel = 'https://unsplash.it/200/300';
  }
  public clear() {
    console.log('Clear');
  }
}
