import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isolation',
  templateUrl: './isolation.component.html',
  styleUrls: ['./isolation.component.scss']
})
export class IsolationComponent implements OnInit{

    constructor() { }

    ngOnInit(): void {
      window.scrollTo(0, 0);
    }
}
