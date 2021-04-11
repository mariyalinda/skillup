import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user = {
    username: '',
    password: '',
    email: '',
    role: '',
    vark: '',
    subject: '',
    city: '',
    state: '',
    country: '',
  };

  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    let uname = localStorage.getItem('username');
    this.userservice.getUser(uname).subscribe((data) => {
      this.user = JSON.parse(JSON.stringify(data));
    });
    console.log(this.user);
  }
}
