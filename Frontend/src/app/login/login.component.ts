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
    subject: '',
  };
  constructor(private _auth: AuthService, private _router: Router) {}
  ngOnInit(): void {}
  checkRole() {
    if (this.user.role == '2') {
      return true;
    }
    return false;
  }
  loginUser() {
    alert(`Welcome back ${this.user.uname}!`);
    this._auth.loginUser(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', this.user.uname);
        if (this.user.role == '1') {
          this._router.navigate(['/sdash']);
        } else if (this.user.role == '2') {
          this._router.navigateByUrl('/tdash', {
            state: { user: this.user },
          });
        }
      },
      (err) => {
        console.log(err);
        this._router.navigate(['/']);
      }
    );
  }
}
