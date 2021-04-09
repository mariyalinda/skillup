import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    uname: '',
    pw: '',
    role: '',
  };
  constructor(private _auth: AuthService, private _router: Router) {}
  ngOnInit(): void {}
  loginUser() {
    alert(`Welcome back ${this.user.uname}!`);
    this._auth.loginUser(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        if (this.user.role == '1') {
          this._router.navigate(['/sdash']);
        } else if (this.user.role == '2') {
          this._router.navigate(['/tdash']);
        }
      },
      (err) => {
        console.log(err);
        this._router.navigate(['/']);
      }
    );
  }
}