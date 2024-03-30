import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/animation.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent implements OnInit{
  @Input() title!: string;
  @Input() content!: string;
  @Input() textBtn!: string;
  @Input() image!: string;

  constructor(private animationService: AnimationService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.title = this.title;
    this.content = this.content;
    this.image = this.image;
    this.textBtn = this.textBtn;
    this.animationService.observeAndAnimate('.an-1');
    const imageElement = document.querySelectorAll('.fade-in');
    imageElement?.forEach((element) => {
      element.addEventListener('load', () => {
        element.classList.add('loaded');
      });
    });
    this.cdRef.detectChanges();
  }
}
