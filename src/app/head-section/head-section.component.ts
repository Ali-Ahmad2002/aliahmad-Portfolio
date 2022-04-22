import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, style, transition } from '@angular/animations';
import Typed from 'typed.js';
import { CanvasForm, CanvasSpace, Create, Group, Line, Pt, PtLike } from 'pts';

@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent implements OnInit {

  @ViewChild("pts")
  private pts!: ElementRef<Element>;
  space!: CanvasSpace;
  form!: CanvasForm;
  points: Group = new Group;
  linePerpendicularFromPt: any;

  ngAfterViewInit() {
    this.initPtsSpace();
    this.drawGraphic();
  }


  constructor() { }

  ngOnInit(): void {
    new Typed('#typed', {
      typeSpeed: 60,
      startDelay: 100,
      stringsElement: '#typed-strings',
      backDelay: 1500,
      backSpeed: 30,
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



  initPtsSpace() {
    this.space = new CanvasSpace(this.pts.nativeElement);
    this.space.setup({ bgcolor: "#0A0A0A", retina: true, resize: true });
    this.form = this.space.getForm();
  }
  drawGraphic() {
    this.space.add({
      start: this.setUpDraw.bind(this),
      animate: this.graphic.bind(this),
    });
    this.space.play();
  }
  setUpDraw(bound: any) {
    this.points = this.createRandomPoints();
    this.linePerpendicularFromPt = this.getOpLinePerpendicularFromPt();
  }
  createRandomPoints() {
    return Create.distributeRandom(this.space.innerBound, 50);
  }
  getOpLinePerpendicularFromPt() {
    return new Group(new Pt(), this.space.center.$subtract(0.1)).op(Line.perpendicularFromPt);
  }
  getDistanceFromMouse(point: any) {
    return Line.magnitude(Group.from([point, this.space.pointer]));
  }
  graphic(time: any, ftime: any) {
    this.points.rotate2D(-0.0005, this.space.center);
    this.points.forEach(this.drawLineAndPoint.bind(this));
  }
  drawLineAndPoint(point: PtLike, pointIndex: number) {
    let lp = this.linePerpendicularFromPt(point);
    let ratio = Math.min(1, 1 - lp.$subtract(point).magnitude() / (this.space.size.x / 2));
    this.form.stroke(`rgba(155,155,155,${ratio}`, ratio * 2).line([point, lp]);
    this.form.fillOnly(["#f03", "#09f", "#0c6"][pointIndex % 3]).point(point, 1, "circle");
  }
  onResize() {
    this.redraw();
  }
  redraw() {
    this.space.removeAll();
    this.initPtsSpace();
    this.drawGraphic();
  }



}
