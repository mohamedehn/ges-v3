import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  public stars: number[] = [1, 2, 3, 4, 5];
  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
    this.observeElements('.an-1', this.animate);
    this.cdRef.detectChanges();
  }

  observeElements(selector: string, callback: () => void): void {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      });
    });
    elements.forEach(element => {
      observer.observe(element);
    });
  }

  animate(): void {
    // Animation du paragraphe
    const paragraphWrapper: any = document.querySelectorAll('.an-1');
    paragraphWrapper.forEach((paragraphWrapper: any) => {
      paragraphWrapper.innerHTML = paragraphWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    });

    anime.timeline({ loop: false }).add({
      targets: '.an-1 .letter',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 2300,
    });
  }

}
