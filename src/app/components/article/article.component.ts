import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{
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
