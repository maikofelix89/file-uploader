import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class FileUploderComponent implements ControlValueAccessor {
    source: any;
    fileChanged: EventEmitter<any>;
    onClear: EventEmitter<any>;
    _imagePath: string;
    uploading: boolean;
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    value: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onBlur(): void;
    onChange(event: any): void;
    clear(): void;
}
