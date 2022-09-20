import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { RightSectionComponent } from './right-section/right-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSectionComponent,
    MiddleSectionComponent,
    RightSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
