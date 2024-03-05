import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit{
  @Input() title!: string;
  @Input() content!: string;
  @Input() textBtn!: string;
  @Input() image!: string;

  constructor() { }

  ngOnInit(): void {
    this.title = this.title;
    this.content = this.content;
    this.image = this.image;
    this.textBtn = this.textBtn;
  }
}
