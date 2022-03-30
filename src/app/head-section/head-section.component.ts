import { Component, OnInit } from '@angular/core';
import { animate, style, transition } from '@angular/animations';
import Typed from 'typed.js';

@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Typed('#typed', {
      typeSpeed: 80,
      startDelay: 100,
      stringsElement: '#typed-strings',
      backDelay: 1500,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    this.animateHeadline();
  }


  animateHeadline() {
    setTimeout(() => {
      transition(':enter', [
        style({ opacity: 0 }), animate('300ms', style({ opacity: 0 }))]
      ),
        transition(':leave',
          [style({ opacity: 1 }), animate('300ms', style({ opacity: 1 }))]
        )
    }, 2000);
  }
}
