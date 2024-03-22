import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { AnimationService } from 'src/app/animation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  public stars: number[] = [1, 2, 3, 4, 5];
  constructor(private cdRef: ChangeDetectorRef, private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
    this.animationService.animate('.an-1');
    this.cdRef.detectChanges();
  }

}
