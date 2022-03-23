import { animate, style, transition } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

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
