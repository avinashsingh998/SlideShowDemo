import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private router : Router){}
  userData = {
    username: '',
    name: '',
    password: ''
  };

  onSubmit() {
    // Store user data in localStorage
    localStorage.setItem('userData', JSON.stringify(this.userData));
    this.router.navigate(["/login"])
    alert("User added")
  }
}
