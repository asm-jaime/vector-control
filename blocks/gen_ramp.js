'use strict';

export class gen_ramp { //{{{
  constructor(dt, freq, amplitude) {
    this.t = 0;

    this.in = Object.create(null);
    this.in.dt = dt;
    this.in.freq = freq;
    this.in.amplitude = amplitude;

    this.out = Object.create(null);
    this.out.pos = 0.0;
  }

  resolve() {
    this.out.pos = ((this.t % this.in.freq) / this.in.freq) * this.in.amplitude;

    this.t = this.t + this.in.dt;
  }

  result() {
    return { pos: this.out.pos };
  }
} //}}}
