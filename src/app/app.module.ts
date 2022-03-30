import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AngularScrollAnimationsModule } from "angular-scroll-animations";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section1/section1.component';
import { MySkillsSectionComponent } from './my-skills-section/my-skills-section.component';
import { MyWorkSectionComponent } from './my-work-section/my-work-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ImprintComponent } from './footer/imprint.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HeadSectionComponent } from './head-section/head-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    MySkillsSectionComponent,
    MyWorkSectionComponent,
    AboutMeComponent,
    ContactMeComponent,
    ImprintComponent,
    ImprintPageComponent,
    DataProtectionComponent,
    HeadSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    AngularScrollAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
