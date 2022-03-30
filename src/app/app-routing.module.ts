import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';
import { MySkillsSectionComponent } from './my-skills-section/my-skills-section.component';
import { Section1Component } from './section1/section1.component';

const routes: Routes = [
  { path: '', component: Section1Component },
  { path: 'imprintPage', component: ImprintPageComponent },
  { path: 'data-protection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
