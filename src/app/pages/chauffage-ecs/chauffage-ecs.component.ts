import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/animation.service';

@Component({
  selector: 'app-chauffage-ecs',
  templateUrl: './chauffage-ecs.component.html',
  styleUrls: ['./chauffage-ecs.component.scss'],
})
export class ChauffageEcsComponent implements OnInit {
  constructor(private animationService: AnimationService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
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
