import { Component, OnInit } from '@angular/core';
import { Navigation } from '@angular/router';

@Component({
  selector: 'app-my-work-section',
  templateUrl: './my-work-section.component.html',
  styleUrls: ['./my-work-section.component.scss']
})
export class MyWorkSectionComponent implements OnInit {

  toggle1: boolean = true;
  toggle2: boolean = false;
  toggle3: boolean = false;


  ngOnInit(): void {

  }

  activeBtn: boolean = false;



  projects = [
    {
      name: 'Pokedex',
      img: 'assets/img/pokedex.jpg',
      description: 'A angular based website to search an show detailed stats of pokemons',
      categorie: 'angular',
      url: 'http://ali-ahmad.developerakademie.net/AngularPokedex/index.html'
    },

    {
      name: 'Join',
      img: 'assets/img/canban.PNG',
      description: 'Tasks management system based on Eisenhower´s urgent-important-principle.',
      categorie: 'javascript',
      url: 'http://gruppe-145.developerakademie.net/GithubProjekte/join-/join/index.html'
    },

    {
      name: 'El Pollo Loco',
      img: 'assets/img/Opción 1.png',
      description: 'JavaScript-based jump-and-run-game.',
      categorie: 'javascript',
      url: ''
    },

    {
      name: 'Ring of Fire',
      img: 'assets/img/ringOfFire.png',
      description: 'Angular-based web-app of the popular drinking game.',
      categorie: 'angular',
      url: 'http://ali-ahmad.developerakademie.net/ringOfFire/index.html'
    }
  ]

  filteredProjects = this.projects;


  showProject(categorie: string) {

    if (categorie !== 'all') {
      this.filteredProjects = this.projects.filter((p) => p.categorie === categorie);
      this.toggle1 = false;
      this.toggle2 = true;
      if (categorie == 'javascript') {
        this.toggle2 = false;
        this.toggle3 = true;
      }
    } else {
      this.filteredProjects = this.projects;
      this.toggle1 = true;
    }
  }

  // constructor(public navigation: NavigationService) {}

}
