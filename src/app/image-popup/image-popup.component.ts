// image-popup.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.scss'],
})
export class ImagePopupComponent {
  @Input() images: { name: string }[] = [];
  @Output() close = new EventEmitter<void>();
  currentIndex: number = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  closePopup() {
    this.close.emit();
  }
}
