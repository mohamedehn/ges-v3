import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AnimationService } from 'src/app/animation.service';

@Component({
  selector: 'app-pop-up-cookies',
  templateUrl: './pop-up-cookies.component.html',
  styleUrls: ['./pop-up-cookies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopUpCookiesComponent implements AfterViewInit{

  public visible: boolean = false;

  constructor(
    private animationService: AnimationService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      this.visible = true;
    }
    this.animationService.observeAndAnimate('.an-1');
    const imageElement = document.querySelectorAll('.fade-in');
    imageElement?.forEach((element) => {
      element.addEventListener('load', () => {
        element.classList.add('loaded');
      });
    });
    this.cdRef.detectChanges();
  }

  handleAccept(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.visible = false;
    window.location.reload();
  }

  handleRefuse(): void {
    localStorage.setItem('cookiesAccepted', 'false');
    this.visible = false;
    window.location.reload();
  }
}
