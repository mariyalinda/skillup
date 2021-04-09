import { Component, OnInit } from '@angular/core';
import { EnglishService } from '../english.service';
import { EngqModel } from './eng.model';

@Component({
  selector: 'app-eng',
  templateUrl: './eng.component.html',
  styleUrls: ['./eng.component.css'],
})
export class EngComponent implements OnInit {
  title: String = 'Reading/Speaking questions';
  engqs: EngqModel[];
  //image properties
  imageWidth: number = 50;
  imageMargin: number = 2;
  constructor(private engService: EnglishService) {}

  ngOnInit(): void {
    this.engService.getEngq().subscribe((data) => {
      this.engqs = JSON.parse(JSON.stringify(data));
    });
  }
}
