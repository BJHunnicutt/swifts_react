import React, { Component } from 'react';
import p5 from 'p5'

// Pass in as a prop eventually
const time_of_day = 'dusk';

class P5Wrapper extends Component {
  /**
   * Add event listener
   */
  componentDidMount() {
    this.canvas = new p5(this.sketch_sky, this.refs.test_wrapper);
    this.canvas2 = new p5(this.sketch_grass, this.refs.test_wrapper);
  }

  componentWillReceiveProps(props, newprops) {
    // if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
    //   this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    // }
  }

  sketch_sky(p) {
    // Constants
    const width = () => window.innerWidth;
    const height = () => window.innerHeight;
    let top_color, bottom_color, day_top, day_bottom, dusk_top, dusk_bottom, night_top, night_bottom;

    p.setup = function () {
      p.createCanvas(width(), height());

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

      p.canvas.id = "sky";
      p.noLoop();
    }


    p.draw= function () {
      // Foreground
      p.setGradient(0, 0, width(), height(), top_color, bottom_color);
    }

    p.setGradient = function (x, y, w, h, c1, c2) {
      const start_height = h * 0.5;
      p.noFill();

      for (var i = y; i <= y+h; i++) {
        if (i < start_height) {
          // Have a solid color until the start_height
          p.stroke(c1);
          p.line(x, i, x+w, i);
        } else {
          // Then start the color gradient
          var inter = p.map((i-start_height), y, (h-start_height), 0, 1);
          var c = p.lerpColor(c1, c2, inter);
          p.stroke(c);
          p.line(x, i, x+w, i);
        }
      }
    }


    p.windowResized = function () {
      console.log('sketch window resize:', window.innerWidth);
      p.resizeCanvas(window.innerWidth, window.innerHeight, p.noRedraw);
      // p.background(123, 163, 176);
    }
  }; // Close sketch_sky()

  sketch_grass(p) {
    // Constants
    const width = () => window.innerWidth;
    const height = () => 40 + (0.025 * window.innerWidth);

    let top_color, bottom_color, day_top, day_bottom, dusk_top, dusk_bottom, night_top, night_bottom;

    p.setup = function () {

      p.createCanvas(width(), height());

      // Define colors
      day_top = p.color(0, 125, 0);
      day_bottom = p.color(103, 164, 45);
      dusk_top = p.color(0, 64, 0);
      dusk_bottom = p.color(31, 92, 13);
      night_top = p.color(0, 0, 0);
      night_bottom = p.color(0, 64, 0);

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

      p.canvas.id = "grass";
      p.noLoop();
    }


    p.draw= function () {
      // Foreground
      p.setGradient(0, 0, width(), height(), top_color, bottom_color);
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
      p.resizeCanvas(width(), height(), p.noRedraw);
      // p.background(123, 163, 176);
    }
  }; // Close sketch_sky()


  render() {
    let opacity;
    switch(time_of_day) {
      case 'dusk':
        opacity = 0.6;
        break;
      case 'night':
        opacity = 0.8;
        break;
      default:
        opacity = 0;
    }

    return (
      <div>
        <div ref="test_wrapper" className="animation"> </div>
        <img id="chapman-school" src="./chapman_school.png" alt="Chapman School Illustration"/>
        <img id="chapman-school-overlay" style={{opacity: opacity}} src="./chapman_school_shadow.png" alt="Chapman School Illustration"/>
      </div>

    )
  }
}

export default P5Wrapper;
