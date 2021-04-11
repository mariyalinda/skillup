import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-vark',
  templateUrl: './vark.component.html',
  styleUrls: ['./vark.component.css'],
})
export class VarkComponent implements OnInit {
  modes1 = ['Visual', 'Auditory', 'Reading/Writing', 'Kinesthetic'];
  modes2 = [0, 0, 0, 0];
  user = {
    uname: '',
    pw: '',
    role: '',
    email: '',
    city: '',
    state: '',
    country: '',
    subject: '',
    vark: '',
  };
  constructor(private _router: Router, private _auth: AuthService) {
    this.user = this._router.getCurrentNavigation().extras.state.user;
  }

  result = '';
  specific_result = [];
  vark = this.result;
  visual() {
    this.modes2[0]++;
  }
  auditory() {
    this.modes2[1]++;
  }
  read() {
    this.modes2[2]++;
  }
  kin() {
    this.modes2[3]++;
  }
  ngOnInit(): void {}

  varkUser() {
    // sorting in descending order
    let len = 4;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (this.modes2[j] < this.modes2[j + 1]) {
          let tmp = this.modes2[j];
          this.modes2[j] = this.modes2[j + 1];
          this.modes2[j + 1] = tmp;

          let tmp2 = this.modes1[j];
          this.modes1[j] = this.modes1[j + 1];
          this.modes1[j + 1] = tmp2;
        }
      }
    }
    //finding learning modality
    if (this.modes2[0] == this.modes2[1]) {
      if (this.modes2[0] == this.modes2[2]) {
        if (this.modes2[0] == this.modes2[3]) {
          this.result = 'Multimodal';
        } else {
          this.result = 'Multimodal';
          this.specific_result[0] = this.modes1[0];
          this.specific_result[1] = this.modes1[1];
          this.specific_result[2] = this.modes1[2];
        }
      } else {
        this.result = 'Multimodal';
        this.specific_result[0] = this.modes1[0];
        this.specific_result[1] = this.modes1[1];
      }
    } else {
      this.result = this.modes1[0];
    }
    //display
    var x = document.getElementById('result');
    x.style.display = 'block';
  }

  onSave() {
    //add to database
    this.user.vark = this.result;
    this._auth.signupUser(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', this.user.uname);
        this._router.navigate(['/sdash']);
      },
      (err) => {
        console.log(err);
        this._router.navigate(['/']);
      }
    );
  }
}
