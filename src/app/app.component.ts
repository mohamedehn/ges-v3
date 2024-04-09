import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  public burgerBtn: HTMLElement | null | undefined;
  public closeBtn: HTMLElement | null | undefined;
  public burgerMenu: HTMLElement | null | undefined;
  public dropdownOpen = false;
  public dropdownOpenSolutions = false;
  public solutions = [
    {
      title: 'Photovoltaïque',
      link: '/photovoltaique',
      description: 'Découvrez nos solutions photovoltaïques pour une transition énergétique durable et rentable.'
    },
    {
      title: 'Borne de recharge',
      link: '/irve',
      description: "Une solution pratique et écologique pour votre mobilité électrique."
    },
    {
      title: 'Climatisation et chauffage',
      link: '/chauffage-ecs',
      description: 'Des solutions efficaces pour des espaces agréables, quelles que soient les conditions météorologiques.'
    },
    {
      title: 'Isolation',
      link: '/isolation',
      description: 'Pour une maison chaleureuse en hiver et fraîche en été, tout en économisant sur vos factures énergétiques.'
    },
    {
      title: 'Ventilation',
      link: '/ventilation',
      description: 'Respirez un air pur et sain pour un environnement plus confortable et une vie plus sereine.'
    }
  ];
  public works = [
    {
      title: 'Audit et ingénierie',
      fragment: 'audit',
      description: "Transformez votre consommation en une source d'économie durable pour un avenir énergétique plus vert."
    },
    {
      title: "Installation et mise en service",
      fragment: 'installation',
      description : "Transformez vos idées en réalité, avec une expertise fiable et un service de qualité."
    },
    {
      title: "Maintenance et SAV",
      fragment: 'sav',
      description: "Maintenance et SAV dédié : tranquillité d'esprit garantie pour un fonctionnement optimal."
    }
  ];
  public burgerLinks = [
    {
      title: 'Accueil',
      link: ''
    },
    {
      title: 'Photovoltaïque',
      link: 'photovoltaique'
    },
    {
      title: 'Bornes de recharge',
      link: 'irve'
    },
    {
      title: 'Clim et chauffage',
      link: 'chauffage-ecs'
    },
    {
      title: 'Isolation',
      link: 'isolation'
    },
    {
      title: 'Ventilation',
      link: 'ventilation'
    },
    {
      title: 'Nos Métiers',
      link: 'metiers'
    },
    {
      title: 'Aides',
      link: 'aides'
    },
    {
      title: 'Professionnels',
      link: 'professionnels'
    },
    {
      title: 'Contact',
      link: 'contact'
    },
    {
      title: 'Mentions légales',
      link: 'mentions'
    },
    {
      title: 'Cookies',
      link: 'cookies'
    }
  ]

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
