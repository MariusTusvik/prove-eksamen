import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

// project-data.interface.ts
export interface MoreDetails {
  propertyTypes?: string[];
  purchaseProcess: string[];
}

export interface ProjectData {
  id: number;
  imgUrl: string;
  projectName: string;
  projectLeader: string;
  description: string;
  moreDetails: MoreDetails;
}

@Component({
  selector: 'app-available-projects',
  templateUrl: './available-projects.component.html',
  styleUrls: ['./available-projects.component.scss'],
})
export class AvailableProjectsComponent {
  constructor(private dialog: MatDialog) {}

  openModule(project: ProjectData): void {
    const dialogRef = this.dialog.open(ProjectModalComponent, {
      width: '800px',
      data: { projectData: project },
    });
  }

  amountOfProjects = 4;
  showMoreProjects() {
    this.amountOfProjects += this.projectData.length - this.amountOfProjects;
    this.showLessToggle();
  }

  showLessProjects() {
    this.amountOfProjects = 4;
    this.showLessToggle();
  }
  showLess = false;
  showLessToggle() {
    if (this.amountOfProjects === this.projectData.length) {
      this.showLess = true;
    } else {
      this.showLess = false;
    }
  }

  projectData = [
    {
      id: 1,
      projectName: 'Strandliv i Costa del Sol',
      projectLeader: 'Maria Fernandez',
      imgUrl: '/assets/images/Projects/Project1.jpg',
      shortDescription:
        'Eksklusive strandfrontvillaer med 3-5 soverom og privat basseng i et rolig område på Costa del Sol.',
      description:
        'Eksklusive strandfrontvillaer med 3-5 soverom, privat basseng, og fantastisk utsikt over Middelhavet. Prosjektet ligger i et rolig og sjarmerende område på Costa del Sol, med kort avstand til lokale fasiliteter og golfbaner.',
      moreDetails: {
        villaTypes: [
          '3-roms villaer: 180-220 kvm',
          '4-roms villaer: 240-280 kvm',
          '5-roms villaer: 300-350 kvm',
        ],
        purchaseProcess: [
          'Prisene starter fra €1,200,000 for 3-roms villaer, €1,500,000 for 4-roms villaer og €1,800,000 for 5-roms villaer',
          '15% forskudd ved kontraktsinngåelse',
        ],
      },
    },
    {
      id: 2,
      projectName: 'Golfparadis ved Alicante',
      projectLeader: 'Juan Carlos Sánchez',
      imgUrl: '/assets/images/Projects/Project2.jpg',
      shortDescription:
        'Moderne og luksuriøse leiligheter og rekkehus i et eksklusivt golfresort nær Alicante.',
      description:
        'Moderne og luksuriøse leiligheter og rekkehus i et eksklusivt golfresort nær Alicante. Prosjektet tilbyr et bredt spekter av fasiliteter, inkludert et 18-hulls golfbane, spa, treningsstudio, tennisbaner og flere restauranter og barer.',
      moreDetails: {
        propertyTypes: [
          '2-roms leiligheter: 80-100 kvm',
          '3-roms leiligheter: 110-130 kvm',
          '3-roms rekkehus: 150-170 kvm',
        ],
        purchaseProcess: [
          'Prisene starter fra €250,000 for 2-roms leiligheter, €300,000 for 3-roms leiligheter og €400,000 for 3-roms rekkehus',
          '20% forskudd ved kontraktsinngåelse',
        ],
      },
    },
    {
      id: 3,
      projectName: 'Urban oase i Barcelona',
      projectLeader: 'Carmen Rodríguez',
      imgUrl: '/assets/images/Projects/Project3.jpg',
      shortDescription:
        'Elegant og moderne boligkompleks i hjertet av Barcelona.',
      description:
        'Elegant og moderne boligkompleks i hjertet av Barcelona. Prosjektet består av 2- og 3-roms leiligheter, alle med høykvalitets finish og design. Fellesarealene inkluderer en frodig takterrasse, et treningsstudio og et svømmebasseng.',
      moreDetails: {
        propertyTypes: [
          '2-roms leiligheter: 75-90 kvm',
          '3-roms leiligheter: 100-120 kvm',
        ],
        purchaseProcess: [
          'Prisene starter fra €450,000 for 2-roms leiligheter og €550,000 for 3-roms leiligheter',
          '20% forskudd ved kontraktsinngåelse',
        ],
      },
    },
    {
      id: 4,
      projectName: 'Tradisjonelle gårdshus i Andalucía',
      projectLeader: 'José García',
      imgUrl: '/assets/images/Projects/Project4.jpg',
      shortDescription:
        'Autentiske gårdshus omgitt av olivenlunder og vingårder i det solrike Andalucía.',
      description:
        'Autentiske gårdshus omgitt av olivenlunder og vingårder i det solrike Andalucía.',
      moreDetails: {
        propertyTypes: [
          '3-roms gårdshus: 150-200 kvm',
          '4-roms gårdshus: 200-250 kvm',
        ],
        purchaseProcess: [
          'Prisene starter fra €500,000 for 3-roms gårdshus og €600,000 for 4-roms gårdshus',
          '20% forskudd ved kontraktsinngåelse',
        ],
      },
    },
    {
      id: 5,
      projectName: 'Luksuriøse villaer i Marbella',
      projectLeader: 'Miguel Ángel Pérez',
      imgUrl: '/assets/images/Projects/Project5.jpg',
      shortDescription:
        'Eksklusive og moderne villaer beliggende i Marbella, med panoramautsikt over Middelhavet.',
      description:
        'Eksklusive og moderne villaer beliggende i Marbella, med panoramautsikt over Middelhavet. Disse luksuriøse villaene tilbyr romslige oppholdsrom, privat svømmebasseng og hage.',
      moreDetails: {
        propertyTypes: [
          '3-roms villaer: 200-250 kvm',
          '4-roms villaer: 250-350 kvm',
        ],
        purchaseProcess: [
          'Prisene starter fra €1,500,000 for 3-roms villaer og €2,000,000 for 4-roms villaer',
          '20% forskudd ved kontraktsinngåelse',
        ],
      },
    },
    {
      id: 6,
      projectName: 'Moderne leiligheter i Madrid',
      projectLeader: 'Carmen Rodríguez',
      imgUrl: '/assets/images/Projects/Project6.jpg',
      shortDescription: 'Moderne leiligheter i hjertet av Madrid.',
      description:
        'Moderne leiligheter i hjertet av Madrid. Prosjektet består av 2- og 3-roms leiligheter, alle med høykvalitets finish og design. Fellesarealene inkluderer en frodig takterrasse, et treningsstudio og et svømmebasseng.',
      moreDetails: {
        propertyTypes: [
          '2-roms leiligheter: 75-90 kvm',
          '3-roms leiligheter: 100-120 kvm',
        ],

        purchaseProcess: [
          'Prisene starter fra €450,000 for 2-roms leiligheter og €550,000 for 3-roms leiligheter',
          '20% forskudd ved kontraktsinngåelse',
        ],
      },
    },
    {
      id: 7,
      projectName: 'Tradisjonelle gårdshus i Andalucía',
      projectLeader: 'José García',
      imgUrl: '/assets/images/Projects/Project7.jpg',
      shortDescription:
        'Autentiske gårdshus omgitt av olivenlunder og vingårder i det solrike Andalucía.',
      description:
        'Autentiske gårdshus omgitt av olivenlunder og vingårder i det solrike Andalucía.',
      moreDetails: {
        propertyTypes: [
          '3-roms gårdshus: 150-200 kvm',
          '4-roms gårdshus: 200-250 kvm',
        ],

        purchaseProcess: [
          'Prisene starter fra €500,000 for 3-roms gårdshus og €600,000 for 4-roms gårdshus',
          '20% forskudd ved kontraktsinngåelse',
        ],
      },
    },
    {
      id: 8,
      projectName: 'Luksuriøse villaer i Marbella',
      projectLeader: 'Miguel Ángel Pérez',
      imgUrl: '/assets/images/Projects/Project8.jpg',
      shortDescription:
        'Eksklusive og moderne villaer beliggende i Marbella, med panoramautsikt over Middelhavet.',
      description:
        'Eksklusive og moderne villaer beliggende i Marbella, med panoramautsikt over Middelhavet. Disse luksuriøse villaene tilbyr romslige oppholdsrom, privat svømmebasseng og hage.',
      moreDetails: {
        propertyTypes: [
          '3-roms villaer: 200-250 kvm',
          '4-roms villaer: 250-350 kvm',
        ],
        purchaseProcess: [
          'Prisene starter fra €1,500,000 for 3-roms villaer og €2,000,000 for 4-roms villaer',
          '20% forskudd ved kontraktsinngåelse',
        ],
      },
    },
    {
      id: 9,
      projectName: 'Moderne leiligheter i Madrid',
      projectLeader: 'Carmen Rodríguez',
      imgUrl: '/assets/images/Projects/Project9.jpg',
      shortDescription: 'Moderne leiligheter i hjertet av Madrid.',
      description:
        'Moderne leiligheter i hjertet av Madrid. Prosjektet består av 2- og 3-roms leiligheter, alle med høykvalitets finish og design. Fellesarealene inkluderer en frodig takterrasse, et treningsstudio og et svømmebasseng.',
      moreDetails: {
        propertyTypes: [
          '2-roms leiligheter: 75-90 kvm',
          '3-roms leiligheter: 100-120 kvm',
        ],

        purchaseProcess: [
          'Prisene starter fra €450,000 for 2-roms leiligheter og €550,000 for 3-roms leiligheter',
          '20% forskudd ved kontraktsinngåelse',
        ],
      },
    },
  ];
}
