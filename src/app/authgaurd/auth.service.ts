// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Placeholder user credentials for demonstration purposes
  private readonly validUser = { email: 'mohitmishra0425@gmail.com', password: '123456' };

  login(email: string, password: string): Observable<boolean> {
    // Simulate authentication with a backend
    if (email === this.validUser.email && password === this.validUser.password) {
      // Successful authentication
      return of(true);
    } else {
      // Failed authentication
      return of(false);
    }
  }
}
