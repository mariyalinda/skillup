import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tdash',
  templateUrl: './tdash.component.html',
  styleUrls: ['./tdash.component.css'],
})
export class TdashComponent implements OnInit {
  sub = '';
  constructor(private _router: Router) {
    this.sub = this._router.getCurrentNavigation().extras.state.user.subject;
  }

  ngOnInit(): void {}

  navigate() {
    if (this.sub == '1') {
      this._router.navigate(['/tdash/math']);
    } else if (this.sub == '2') {
      this._router.navigate(['/tdash/science']);
    } else if (this.sub == '3') {
      this._router.navigate(['/tdash/ss']);
    } else if (this.sub == '4') {
      this._router.navigate(['/tdash/english']);
    } else {
      this._router.navigate(['/tdash']);
    }
  }
}
