import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-irve',
  templateUrl: './irve.component.html',
  styleUrls: ['./irve.component.scss']
})
export class IrveComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
