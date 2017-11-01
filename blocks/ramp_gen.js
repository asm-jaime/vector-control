'use strict';

export class ramp_gen { //{{{
  constructor(dt, freq) {
    this.amplitude = 3.14;
    this.dt = dt;
    this.freq = freq;
    this.pos = 0.0;
  }

  resolve() {
    this.dt++;
    this.pos = ((this.dt % this.freq) / this.freq) * this.amplitude;
  }

  result() {
    return { pos: this.pos };
  }
} //}}}
