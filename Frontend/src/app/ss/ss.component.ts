import { Component, OnInit } from '@angular/core';
import { SsqModel } from './ss.model';
import { SsService } from '../ss.service';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.css'],
})
export class SsComponent implements OnInit {
  title: String = 'Social Studies questions';
  ssqs: SsqModel[];
  //image properties
  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor(private SsService: SsService) {}

  ngOnInit(): void {
    this.SsService.getSsq().subscribe((data) => {
      this.ssqs = JSON.parse(JSON.stringify(data));
    });
  }
}
