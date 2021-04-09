import { Component, OnInit } from '@angular/core';
import { ScienceqModel } from './science.model';
import { ScienceService } from '../science.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css'],
})
export class ScienceComponent implements OnInit {
  title: String = 'Science questions';
  scienceqs: ScienceqModel[];
  //image properties
  imageWidth: number = 50;
  imageMargin: number = 2;

  //creating service object for calling getProducts()
  constructor(private sciService: ScienceService) {}

  ngOnInit(): void {
    this.sciService.getScienceq().subscribe((data) => {
      this.scienceqs = JSON.parse(JSON.stringify(data));
    });
  }
}
