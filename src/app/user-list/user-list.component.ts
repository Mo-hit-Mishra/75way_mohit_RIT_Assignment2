// user-list.component.ts
import { Component } from '@angular/core';
import { User } from '../User-model/user.model'; // Import the User model
import { UserService } from '../User-model/user.service'; // Import the UserService
import { DocumentDialogComponent } from '../document-dialog/document-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ImageUploadDialogComponent } from '../image-upload-dialog/image-upload-dialog.component';
interface DocumentImage {
  name: string;
  // other properties if any
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})

export class UserListComponent {
  users: User[] = [];

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      console.log(users)
      this.users = users;
    });
  }


  // openDocumentDialog(user: User) {
  //   this.dialog.open(DocumentDialogComponent, {
  //     data: {
  //       title: 'Document Images',
  //       documentImages: user.documentImages,
  //     },
  //   });
  // }

  uploadFiles(user: User, event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target?.files;
  
    if (files && files.length > 0) {
      const fileList: File[] = Array.from(files);
      this.userService.uploadFiles(user.id, fileList).subscribe((success) => {
        if (success) {
          // Update the user's uploaded files array if the upload is successful
          user.uploadedFiles = fileList;
        }
      });
    }
  }

  openImageUploadDialog(user: User): void {
    const dialogRef = this.dialog.open(ImageUploadDialogComponent, {
      width: '400px',
    });

    dialogRef.componentInstance.imageUploaded.subscribe((file: File) => {
      this.userService.uploadFiles(user.id, [file]).subscribe((success) => {
        if (success) {
          // File uploaded successfully, you can update user data or perform other actions
          console.log('File uploaded successfully');
        } else {
          console.error('File upload failed');
        }
      });
    });
  }
}
