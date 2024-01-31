// file-upload.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private uploadUrl = 'https://localhost:4200'; 

  constructor(private http: HttpClient) {}

  uploadFile(userId: number, file: File): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<boolean>(`${this.uploadUrl}/${userId}/upload`, formData);
  }
}
