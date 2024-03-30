import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit{
  public burgerBtn: HTMLElement | null | undefined;
  public closeBtn: HTMLElement | null | undefined;
  public burgerMenu: HTMLElement | null | undefined;
  public dropdownOpen = false;
  public dropdownOpenSolutions = false;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
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

  closeDropdownSolutions() {
    this.dropdownOpenSolutions = false;
    this.cdRef.detectChanges();
  }

  toggleDropdownSolutions() {
    this.dropdownOpenSolutions = !this.dropdownOpenSolutions;
    this.dropdownOpen = false;
    this.cdRef.detectChanges();
  }

  closeDropdown() {
    this.dropdownOpen = false;
    this.cdRef.detectChanges();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownOpenSolutions = false;
    this.cdRef.detectChanges();
  }

  closeBurgerMenu() {
    if (this.burgerMenu) {
      this.burgerMenu.classList.add('hidden');
    }
  }
}
