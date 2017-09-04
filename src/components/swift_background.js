import React, { Component } from 'react';
import p5 from 'p5'


class P5Wrapper extends Component {
  /**
   * Add event listener
   */
  componentDidMount() {
    this.canvas = new p5(this.sketch, this.refs.test_wrapper);
  }

  componentWillReceiveProps(props, newprops) {
    // if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
    //   this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    // }
  }

  sketch(p) {
    // Constants
    let top_color, bottom_color, day_top, day_bottom, dusk_top, dusk_bottom, night_top, night_bottom;
    let time_of_day = 'day';

    p.setup = function () {
      p.createCanvas(window.innerWidth, window.innerHeight);

      // p.createImg("http://th07.deviantart.net/fs70/PRE/i/2011/260/3/5/dash_hooray_by_rainbowcrab-d49xk0d.png");
      //
      // img.position(190, 50);
      // img.size(200, 200);


      // Define colors
      day_top = p.color(61, 191, 246);
      day_bottom = p.color(255, 255, 255);
      dusk_top = p.color(0, 113, 188);
      dusk_bottom = p.color(251, 184, 75);
      night_top = p.color(0, 49, 94);
      night_bottom = p.color(0, 114, 127);

      switch(time_of_day) {
        case 'dusk':
            top_color = dusk_top;
            bottom_color = dusk_bottom;
            break;
        case 'night':
            top_color = night_top;
            bottom_color = night_bottom;
            break;
        default:
            top_color = day_top;
            bottom_color = day_bottom;
      }

      p.noLoop();
    }

    p.draw= function () {
      // Foreground
      p.setGradient(0, 0, window.innerWidth, (window.innerHeight * 1.5), top_color, bottom_color);
    }

    p.setGradient = function (x, y, w, h, c1, c2) {

      p.noFill();

      for (var i = y; i <= y+h; i++) {
        var inter = p.map(i, y, y+h, 0, 1);
        var c = p.lerpColor(c1, c2, inter);
        p.stroke(c);
        p.line(x, i, x+w, i);
      }
    }


    p.windowResized = function () {
      console.log('sketch window resize:', window.innerWidth);
      p.resizeCanvas(window.innerWidth, window.innerHeight, p.noRedraw);
      // p.background(123, 163, 176);
    }

  };


  render() {
    return (
      <div>
        <div ref="test_wrapper">
          <img id="chapman-school" src="./chapman_school.png" alt="Chapman School Illustration"/>
        </div>
      </div>

    )
  }
}

export default P5Wrapper;
