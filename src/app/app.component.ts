import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Green Energy Solutions';

  burgerBtn: HTMLElement | null | undefined;
  closeBtn: HTMLElement | null | undefined;
  burgerMenu: HTMLElement | null | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.burgerBtn = document.getElementById('burger-btn');
    this.closeBtn = document.getElementById('close-btn');
    this.burgerMenu = document.getElementById('burger-menu');

    if (this.burgerBtn && this.burgerMenu) {
      this.burgerBtn.addEventListener('click', () => {
        this.burgerMenu?.classList.toggle('hidden');
      });
    }

    if (this.closeBtn && this.burgerMenu) {
      this.closeBtn.addEventListener('click', () => {
        this.burgerMenu?.classList.add('hidden');
      });
    }
  }

  closeBurgerMenu() {
    if (this.burgerMenu) {
      this.burgerMenu.classList.add('hidden');
    }
  }
}
