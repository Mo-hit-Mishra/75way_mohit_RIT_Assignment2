// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../authgaurd/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    // Use the authentication service to perform login
    this.authService.login(this.email, this.password).subscribe((success) => {
      if (success) {
        console.log('Authentication successful!');
        // Navigate to the user list page on success
        this.router.navigate(['/user-list']);
      } else {
        console.log('Authentication failed. Invalid credentials.');
        // Handle failed authentication (e.g., display an error message)
      }
    });
  }
}
