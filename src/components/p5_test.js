import React, { Component } from 'react';
import p5 from 'p5'


class P5Wrapper extends Component {
  /**
   * Add event listener
   */
  componentDidMount() {
    this.canvas = new p5(this.sketch, this.refs.test_wrapper)
  }

  componentWillReceiveProps(props, newprops) {
    // if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
    //   this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    // }
  }

  sketch(p) {
    var r = 255;
    var g = 215;
    var b = 0;

    p.setup = function () {
      p.createCanvas(window.innerWidth, window.innerHeight);
      p.background(123, 163, 176);
      p.noLoop();
    };

    p.draw = function () {
      p.fill(r, g, b);
      p.strokeWeight(0);
      p.ellipse(p.mouseX, p.mouseY, 80, 80);
      p.lifespan--;
    };

    /*
    * Only redraw the canvas occasionally
    */
    p.frameRate(10);

    p.mouseMoved = function () {
      r = p.random(200, 255);
      g = p.random(175, 255);
      b = p.random(0, 0);
    }

    p.windowResized = function () {
      console.log('sketch window resize:', window.innerWidth);
      p.resizeCanvas(window.innerWidth, window.innerHeight, p.noRedraw);
      p.background(123, 163, 176);
    }

  };

  render() {
    return <div ref="test_wrapper"></div>
  }
}

export default P5Wrapper;
