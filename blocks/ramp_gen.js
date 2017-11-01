'use strict';

export class ramp_gen { //{{{
  constructor(dt, freq) {
    this.amplitude = 3.14;
    this.t = 0;

    this.in = Object.create(null);
    this.in.dt = dt;
    this.in.freq = freq;

    this.out = Object.create(null);
    this.out.pos = 0.0;
  }

  resolve() {
    this.t = this.t + this.in.dt;
    this.out.pos = ((this.t % this.in.freq) / this.in.freq) * this.amplitude;
  }

  result() {
    return { pos: this.out.pos };
  }
} //}}}
