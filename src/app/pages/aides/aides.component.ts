import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aides',
  templateUrl: './aides.component.html',
  styleUrls: ['./aides.component.scss']
})
export class AidesComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
