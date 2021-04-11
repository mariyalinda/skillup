import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

declare var $: any;

@Component({
  selector: 'app-navlogin',
  templateUrl: './navlogin.component.html',
  styleUrls: ['./navlogin.component.css'],
})
export class NavloginComponent implements OnInit {
  constructor(private _router: Router, public _auth: AuthService) {}
  logOutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this._router.navigate(['/']);
  }
  ngOnInit(): void {
    $(document).ready(function () {
      $('#myInput').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('#myDIV *').filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
    });
  }
}
