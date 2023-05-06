import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './Pages/front-page/front-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvailableProjectsComponent } from './Components/available-projects/available-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    AvailableProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
