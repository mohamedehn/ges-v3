import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{

  @Input() title!: string;
  @Input() content!: string;
  @Input() textBtn!: string;
  @Input() intro!: string;
  @Input() list!: string;

  constructor() { }

  ngOnInit(): void {
    this.title = this.title;
    this.content = this.content;
    this.textBtn = this.textBtn;
    this.intro = this.intro;
    this.list = this.list;
  }
}
