import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photovoltaique',
  templateUrl: './photovoltaique.component.html',
  styleUrls: ['./photovoltaique.component.scss']
})
export class PhotovoltaiqueComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
