import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sdash',
  templateUrl: './sdash.component.html',
  styleUrls: ['./sdash.component.css'],
})
export class SdashComponent implements OnInit {
  // math = false;
  // science = false;
  // english = false;
  // ss = false;

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', '#ccc');
  }

  ngOnInit(): void {}
}
