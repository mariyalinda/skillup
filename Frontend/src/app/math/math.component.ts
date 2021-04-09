import { Component, OnInit } from '@angular/core';
import { MathqModel } from './math.model';
import { MathService } from '../math.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
})
export class MathComponent implements OnInit {
  title: String = 'Math questions';
  mathqs: MathqModel[];
  //image properties
  imageWidth: number = 50;
  imageMargin: number = 2;

  //creating service object for calling getProducts()
  constructor(private mathService: MathService) {}

  ngOnInit(): void {
    this.mathService.getMathq().subscribe((data) => {
      this.mathqs = JSON.parse(JSON.stringify(data));
    });
  }
}
