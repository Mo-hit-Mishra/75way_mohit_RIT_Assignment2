// user.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { FileUploadService } from '../file_upload/file-upload.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fileUploadService: FileUploadService) {}

  getUsers(): Observable<User[]> {
    return of([
      {
        id: 1,
        profileImage: 'profile1.jpeg',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        documentImages: [
          { name: 'document1.jpg' },
          { name: 'document2.jpg' },
          { name: 'document3.jpg' },
        ],
      },
      {
        id: 2,
        profileImage: 'profile2.jpg',
        name: 'joe ',
        email: 'joe@example.com',
        phone: '123-456-77770',
        documentImages: [
          { name: 'document1.jpg' },
          { name: 'document2.jpg' },
          { name: 'document3.jpg' },
        ],
      },
      {
        id: 3,
        profileImage: 'profile3.jpg',
        name: 'Atlas',
        email: 'Atlas@example.com',
        phone: '123-477-7890',
        documentImages: [
          { name: 'document1.jpg' },
          { name: 'document2.jpg' },
          { name: 'document3.jpg' },
        ],
      },
      {
        id: 4,
        profileImage: 'profile34.jpg',
        name: 'Alii Doe',
        email: 'Alii@example.com',
        phone: '12300-456-7890',
        documentImages: [
          { name: 'document1.jpg' },
          { name: 'document2.jpg' },
          { name: 'document3.jpg' },
        ],
      },
      // Add more user data as needed
    ]);
  }

  uploadFiles(userId: number, files: File[]): Observable<boolean> {
    // For simplicity, assuming only one file is uploaded here
    const file = files[0];

    if (file) {
      return this.fileUploadService.uploadFile(userId, file);
    }

    return of(false);
  }
}
