import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private router : Router){}

  onSubmit() {
    const storedUserData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (storedUserData.username === this.username && storedUserData.password === this.password) {
      // Login successful, you can navigate to another page or perform any other action
      console.log('Login successful');
      this.router.navigate(["/home"], {state: {username : storedUserData.name}})
      this.loginError = '';
    } else {
      // Login failed, display error message
      console.log('Login failed');
      this.loginError = 'Invalid username or password';
    }
  }
}
