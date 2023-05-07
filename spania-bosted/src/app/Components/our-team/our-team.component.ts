import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss'],
})
export class OurTeamComponent {
  employees = [
    {
      name: 'Anders Westad',
      position: 'Eier og Eiendomsmegler',
      image: '/assets/images/employees/AndersWestad.png',
      phone: "+47 955 22 321",
      email: "anders@spaniabosted.no"
    },
    {
      name: 'Markus Lundeberg',
      position: 'Eier og Eiendomsmegler',
      image: '/assets/images/employees/MarkusLundeberg.png',
      phone: "+47 905 42 256",
      email: "markus@spaniabosted.no"
    },
    {
      name: 'Thomas Bärnheim',
      position: 'CEO of SpaniaBostader.se',
      image: '/assets/images/employees/ThomasBärnheim.png',
      phone: "+47 708 85 2992",
      email: "thomas@spaniabosted.se"
    },
    {
      name: 'Camilla Skavikeng',
      position: 'Eiendomsmegler',
      image: '/assets/images/employees/CamillaSkavikeng.png',
      phone: "+47 680 648 111",
      email: "cammila@spaniabosted.no"
    },
    {
      name: 'Eliot Ødegaard',
      position: 'Eiendomsmegler',
      image: '/assets/images/employees/EliotØdegård.png',
      phone: "+47 974 91 105",
      email: "markus@spaniabosted.no"
    }, 
    {
      name: 'Carolina Gingles Burke',
      position: 'Eindomsmegler',
      image: '/assets/images/employees/CarolinaGinglesBurke.png',
      phone: "+47 744 703 401",
      email: "carolinagb@spaniabosted.no"
    },
    {
      name: 'Carolina Lopez-Braun',
      position: 'Juridisk avdeling',
      image: '/assets/images/employees/CarolinaLopez-Braun.png',
      phone: "+47 608 314 397",
      email: "carolina@spaniabosted.no"
    },
    {
      name: 'Bent Ottervik',
      position: 'Eindomsrådgiver i Bergen',
      image: '/assets/images/employees/BentOttervik.png',
      phone: "+47 917 87 188",
      email: "bent@spaniabosted.no"
    },
    {
      name: 'Eliot Ødegaard',
      position: 'CEO',
      image: '/assets/images/employees/AndersWestad.png',
      phone: "+47 974 91 105",
      email: "markus@spaniabosted.no"
    },
  ];
    slideIndex: number = 1;

  showSlide(index: number): boolean {
    return this.slideIndex === index;
  }

  nextSlide(): void {
    this.slideIndex = this.slideIndex === this.employees.length ? 1 : this.slideIndex + 1;
  }

  previousSlide(): void {
    this.slideIndex = this.slideIndex === 1 ? this.employees.length : this.slideIndex - 1;
  }

  calcGridRow(index: number): number {
    return Math.floor(index / 4) % 2 + 1;
  }
}
