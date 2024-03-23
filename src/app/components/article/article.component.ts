import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/animation.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements AfterViewInit{
  @Input() title!: string;
  @Input() content!: string;
  @Input() textBtn!: string;
  @Input() image!: string;

  constructor(private animationService: AnimationService, private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.title = this.title;
    this.content = this.content;
    this.image = this.image;
    this.textBtn = this.textBtn;
    this.animationService.animate('.an-1');
    const imageElement = document.querySelector('.fade-in');
    imageElement?.addEventListener('load', () => {
      imageElement.classList.add('loaded');
    });
    this.cdRef.detectChanges();
  }
}
