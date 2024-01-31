// document-dialog.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-document-dialog',
  templateUrl: './document-dialog.component.html',
  styleUrls: ['./document-dialog.component.scss'],
})
export class DocumentDialogComponent {
  currentImageIndex: number = 0;

  constructor(
    @Optional() public dialogRef: MatDialogRef<DocumentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.data.documentImages.length;
  }

  previousImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.data.documentImages.length) % this.data.documentImages.length;
  }
}
