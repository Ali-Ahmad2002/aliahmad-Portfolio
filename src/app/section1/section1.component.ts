import { animate, style, transition } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CanvasSpace, Create, Group, Line } from 'pts';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit, AfterViewInit {
  space: any = new CanvasSpace("#hello");
  form = this.space.getForm();
  //   // Initiate your own BeautifulForm class
//   form = new BeautifulForm(space);

 draw(){
  var pts = new Group();

  this.space.add({ 

    // creatr 200 random points
    start:( _bound : any ) => {
      pts = Create.distributeRandom( this.space.innerBound, 200 );
    }, 

    animate: (_time : any, _ftime: any) => {
      // make a line and turn it into an "op" (see the guide on Op for more)
      let perpend = new Group( this.space.center.$subtract(0.1), this.space.pointer ).op( Line.perpendicularFromPt );
      pts.rotate2D( 0.0005, this.space.center );

      pts.forEach( (p, i) => {
        // for each point, find the perpendicular to the line
        let lp = perpend( p );
        var ratio = Math.min( 1, 1 - lp.$subtract(p).magnitude()/(this.space.size.x/2) );
        this.form.stroke(`rgba(255,255,255,${ratio}`, ratio*2).line( [ p, lp ] );
        this.form.fillOnly( ["#f03", "#09f", "#0c6"][i%3] ).point( p, 1 );
      });
    },

  });
  
  //// ----
  

  //space.bindMouse().bindTouch().play();
 }


  constructor() { }
  ngAfterViewInit(): void {
    this.space = new CanvasSpace("#hello");
    this.form = this.space.getForm();
    this.space.setup({ bgcolor: "#0000" });
    this.draw();
  }

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
