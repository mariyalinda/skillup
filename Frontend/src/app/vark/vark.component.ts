import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-vark',
  templateUrl: './vark.component.html',
  styleUrls: ['./vark.component.css'],
})
export class VarkComponent implements OnInit {
  modes = {
    v: 0,
    a: 0,
    r: 0,
    k: 0,
  };

  constructor(private _router: Router) {}

  result = '';
  specific_result = [];
  ngOnInit(): void {}
  visual() {
    this.modes['v']++;
  }
  auditory() {
    this.modes['a']++;
  }
  read() {
    this.modes['r']++;
  }
  kin() {
    this.modes['k']++;
  }
  varkUser() {
    //sorting in descending order
    // var items = Object.keys(this.modes).map(function (key) {
    //   return [key, this.modes.key];
    // });
    // items.sort(function (first, second) {
    //   return second[1] - first[1];
    // });
    // var sorted_obj = {};
    // $.each(items, function (k, v) {
    //   let use_key = v[0];
    //   let use_value = v[1];
    //   sorted_obj[use_key] = use_value;
    // });
    // //finding learning modality
    // if (
    //   sorted_obj[Object.keys(sorted_obj)[0]] ==
    //   sorted_obj[Object.keys(sorted_obj)[1]]
    // ) {
    //   if (
    //     sorted_obj[Object.keys(sorted_obj)[0]] ==
    //     sorted_obj[Object.keys(sorted_obj)[2]]
    //   ) {
    //     this.result = 'Multimodal';
    //     this.specific_result[0] = Object.keys(sorted_obj)[0];
    //     this.specific_result[1] = Object.keys(sorted_obj)[1];
    //     this.specific_result[2] = Object.keys(sorted_obj)[2];
    //   } else {
    //     this.result = 'Multimodal';
    //     this.specific_result[0] = Object.keys(sorted_obj)[0];
    //     this.specific_result[1] = Object.keys(sorted_obj)[1];
    //   }
    // } else if (
    //   sorted_obj[Object.keys(sorted_obj)[1]] ==
    //   sorted_obj[Object.keys(sorted_obj)[2]]
    // ) {
    //   this.result = 'Multimodal';
    //   this.specific_result[1] = Object.keys(sorted_obj)[1];
    //   this.specific_result[2] = Object.keys(sorted_obj)[2];
    // } else {
    //   this.result = Object.keys(sorted_obj)[0];
    // }
  }
  onSave() {
    //add to database
    this._router.navigate(['/sdash']);
  }
}
