import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-vark',
  templateUrl: './vark.component.html',
  styleUrls: ['./vark.component.css'],
})
export class VarkComponent implements OnInit {
  modes1 = ['Visual', 'Auditory', 'Reading/Writing', 'Kinesthetic'];
  modes2 = [0, 0, 0, 0];
  constructor(private _router: Router) {}

  result = '';
  specific_result = [];
  vark = { result: this.result, modes: this.specific_result };
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
    this._router.navigate(['/sdash']);
  }
}
