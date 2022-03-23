import { Component, OnInit } from '@angular/core';
import { Navigation } from '@angular/router';

@Component({
  selector: 'app-my-work-section',
  templateUrl: './my-work-section.component.html',
  styleUrls: ['./my-work-section.component.scss']
})
export class MyWorkSectionComponent implements OnInit {


  ngOnInit(): void {

  }

  activeBtn: boolean = false;



  projects = [
    {
      name: 'Pokedex',
      img: 'assets/img/pokedex.jpg',
      categorie: 'angular',
      url: 'http://ali-ahmad.developerakademie.net/AngularPokedex/index.html'
    },

    {
      name: 'Join',
      img: 'assets/img/canban.PNG',
      categorie: 'javascript',
      url: 'http://gruppe-145.developerakademie.net/GithubProjekte/join-/join/index.html'
    },

    {
      name: 'El Pollo Loco',
      img: 'assets/img/Opción 1.png',
      categorie: 'javascript',
      url: ''
    },

    {
      name: 'Ring of Fire',
      img: 'assets/img/ringOfFire.png',
      categorie: 'angular',
      url: 'http://ali-ahmad.developerakademie.net/ringOfFire/index.html'
    }
  ]

  filteredProjects = this.projects;


  showProject(categorie: string) {

    if (categorie !== 'all') {
      this.filteredProjects = this.projects.filter((p) => p.categorie === categorie);
    } else {
      this.filteredProjects = this.projects;
    }
  }

  // constructor(public navigation: NavigationService) {}

}
