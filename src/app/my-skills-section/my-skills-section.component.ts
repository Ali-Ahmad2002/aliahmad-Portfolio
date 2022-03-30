import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills-section',
  templateUrl: './my-skills-section.component.html',
  styleUrls: ['./my-skills-section.component.scss']
})
export class MySkillsSectionComponent implements OnInit {

  allSkills = [
    {
      img: 'assets/img/java script.png',
      skill: 'JavaScript'
    },

    {
      img: 'assets/img/Angular-logo.png',
      skill: 'Angular'
    },

    {
      img: 'assets/img/Group 205.png',
      skill: 'HTML/CSS'
    },

    {
      img: 'assets/img/Group 226.png',
      skill: 'Scrum'
    },

    {
      img: 'assets/img/Git-Icon-1788C 2.png',
      skill: 'Git'
    },

    {
      img: 'assets/img/Group 20.png',
      skill: 'Design Thinking'
    },

    {
      img: 'assets/img/icons8-rest-api-80 2.png',
      skill: 'Rest Api'
    },

    {
      img: 'assets/img/icons8-test-lab-96 2.png',
      skill: 'Test Automation'
    },

    {
      img: 'assets/img/icons8-database-52 2.png',
      skill: 'Databases'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
