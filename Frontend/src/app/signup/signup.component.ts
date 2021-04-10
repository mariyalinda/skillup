import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user = {
    uname: '',
    pw: '',
    role: '',
    email: '',
    city: '',
    state: '',
    country: '',
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
  signupUser() {
    alert(`Welcome aboard ${this.user.uname}!`);
    this._auth.signupUser(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        if (this.user.role == '1') {
          this._router.navigate(['/vark']);
        } else if (this.user.role == '2') {
          this._router.navigateByUrl('/tdash', { state: { user: this.user } });
        }
      },
      (err) => {
        console.log(err);
        this._router.navigate(['/']);
      }
    );
  }
}
