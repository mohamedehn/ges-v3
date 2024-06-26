import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AnimationService } from 'src/app/animation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements AfterViewInit {

  public agreed: boolean = false;
  public isCookiesAccepted: boolean = false;
  constructor(
    private animationService: AnimationService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);

    const accepted = localStorage.getItem('cookiesAccepted') === 'true';
    const notAccepted = localStorage.getItem('cookiesAccepted') === 'false';

    if (accepted)this.isCookiesAccepted = true;
    if (notAccepted)this.isCookiesAccepted = false;
    console.log(this.isCookiesAccepted);


    this.animationService.observeAndAnimate('.an-1');
    const imageElement = document.querySelectorAll('.fade-in');
    imageElement?.forEach((element) => {
      element.addEventListener('load', () => {
        element.classList.add('loaded');
      });
    });
    this.cdRef.detectChanges();
  }

  handleClick(): void {
    if (!this.isCookiesAccepted) {
      alert("Veuillez accepter les cookies pour continuer.");
    }
  }

  acceptCookies(event: Event): void {
    event.preventDefault();
    localStorage.removeItem("cookiesAccepted");
    window.location.reload();
    this.cdRef.detectChanges();
  }
}
