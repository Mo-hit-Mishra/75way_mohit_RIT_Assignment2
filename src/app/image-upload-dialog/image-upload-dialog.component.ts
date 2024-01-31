// image-upload-dialog.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-upload-dialog',
  templateUrl: './image-upload-dialog.component.html',
  styleUrls: ['./image-upload-dialog.component.scss'],
})
export class ImageUploadDialogComponent {
  @Output() imageUploaded = new EventEmitter<File>();

  constructor(public dialogRef: MatDialogRef<ImageUploadDialogComponent>) {}

  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      this.imageUploaded.emit(selectedFile);
      this.dialogRef.close();
    }
  }

  onDragOver(event: any): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      const droppedFile = files[0];
      this.imageUploaded.emit(droppedFile);
      this.dialogRef.close();
    }
  }
}
