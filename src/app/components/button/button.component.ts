import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationService } from 'src/app/animation.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit{

  @Input() width!: string;
  @Input() height!: string;
  @Input() buttonText!: string;

  constructor(
    private animationService: AnimationService,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.width = this.width || '250px';
    this.height = this.height || '80px';
    this.buttonText = this.buttonText;
    this.animationService.observeAndAnimate('.an-1');
    const imageElement = document.querySelectorAll('.fade-in');
    imageElement?.forEach((element) => {
      element.addEventListener('load', () => {
        element.classList.add('loaded');
      });
    });
    this.cdRef.detectChanges();
  }

  redirectToContact() {
    this.router.navigate(['/contact']);
  }
}
