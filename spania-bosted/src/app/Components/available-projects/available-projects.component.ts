import { Component } from '@angular/core';

@Component({
  selector: 'app-available-projects',
  templateUrl: './available-projects.component.html',
  styleUrls: ['./available-projects.component.scss'],
})
export class AvailableProjectsComponent {
  projects = [
    {
      title: 'Strandliv i Costa del Sol',
      projectManager: 'Maria Fernandez',
      description:
        'Luksuriøse strandvillaer med utsikt over det vakre Middelhavet.',
      imageUrl: '/assets/images/Projects/Project1.jpg',
    },
    {
      title: 'Golfparadis ved Alicante',
      projectManager: 'Juan Carlos Sánchez',
      description:
        'Eksklusive leiligheter i nærheten av topprangerte golfbaner og fasiliteter.',
      imageUrl: '/assets/images/Projects/Project2.jpg',
    },
    {
      title: 'Familievennlige rekkehus i Málaga',
      projectManager: 'Carmen Rodríguez',
      description:
        'Moderne rekkehus med romslige hager og felles svømmebasseng.',
      imageUrl: '/assets/images/Projects/Project3.jpg',
    },
    {
      title: 'Urban luksus i Barcelona',
      projectManager: 'Guillermo Navarro',
      description:
        'Stilfulle leiligheter i hjertet av Barcelona med førsteklasses fasiliteter.',
      imageUrl: '/assets/images/Projects/Project4.jpg',
    },
    {
      title: 'Fjellhytter i Pyreneene',
      projectManager: 'Laura García',
      description:
        'Sjarmerende fjellhytter omgitt av naturskjønne turstier og skisport.',
      imageUrl: '/assets/images/Projects/Project5.jpg',
    },
    {
      title: 'Marbella luksusvillaer',
      projectManager: 'Alejandro Torres',
      description:
        'Prestisjetunge villaer med panoramautsikt og privat basseng i Marbella.',
      imageUrl: '/assets/images/Projects/Project6.jpg',
    },
    {
      title: 'Koselige landsbyhus på Mallorca',
      projectManager: 'Isabel Martín',
      description: 'Sjarmerende steinhus i idylliske landsbyer på Mallorca.',
      imageUrl: '/assets/images/Projects/Project7.jpg',
    },
    {
      title: 'Moderne leiligheter i Valencia',
      projectManager: 'Sergio Pérez',
      description:
        'Elegante leiligheter med smarte designløsninger i Valencias pulserende bysentrum.',
      imageUrl: '/assets/images/Projects/Project8.jpg',
    },
    {
      title: 'Penthouse-leiligheter i Madrid',
      projectManager: 'Ana Navarro',
      description:
        'Luksuriøse penthouse-leiligheter med spektakulær utsikt over Madrids skyline.',
      imageUrl: '/assets/images/Projects/Project9.jpg',
    },
    {
      title: 'Tradisjonelle gårdshus i Andalucía',
      projectManager: 'José García',
      description:
        'Autentiske gårdshus omgitt av olivenlunder og vingårder i det solrike Andalucía.',
      imageUrl: '/assets/images/Projects/Project10.jpg',
    },
  ];

  amountOfProjects = 4;
  showMoreProjects() {
    this.amountOfProjects += this.projects.length - this.amountOfProjects;
    this.showLessToggle();
  }

  showLessProjects() {
    this.amountOfProjects = 4;
    this.showLessToggle();
  }
  showLess = false;
  showLessToggle() {
    if (this.amountOfProjects === this.projects.length) {
      this.showLess = true;
    } else {
      this.showLess = false;
    }
  }
}
