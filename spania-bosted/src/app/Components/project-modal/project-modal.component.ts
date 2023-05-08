import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectData } from '../available-projects/available-projects.component';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent /* implements OnInit */ {
  projectData: ProjectData;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { projectData: ProjectData }
  ) {
    this.projectData = data.projectData;
  }
  /*
  ngOnInit() {
    console.log(this.projectData);
  } */
}
