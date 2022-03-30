import { animate, style, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.options = {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 40
    };

  }

  options = {
    strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 40
  };







}
