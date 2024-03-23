import { Injectable } from '@angular/core';
declare var anime: any;

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

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

  animate(selector: string): void {
    const elementWrapper: any = document.querySelectorAll(selector);
    elementWrapper.forEach((paragraphWrapper: any) => {
      paragraphWrapper.innerHTML = paragraphWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    });

    anime.timeline({ loop: false }).add({
      targets: `${selector} .letter`,
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 2300,
    });
  }
}
